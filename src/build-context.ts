import { Breakpoints } from './breakpoints';
import { Module, ModuleValue } from './module';
import { Config, ConfigModule } from './config';
import { Builder, AttributePayload, ValuePayload, StylePayload, Value } from "./builder";

export class BuildContext {
  private moduleDependencies = new Map<Module, BuildContext | undefined>();

  readonly prefix?: string;
  readonly useShortAttribute?: boolean;
  readonly useShortValue?: boolean;
  readonly breakpoints?: Breakpoints;
  readonly custom?: any;
  readonly value: ModuleValue;

  constructor(
    private builder: Builder,
    private config: Config,
    public readonly mod: Module,
    configModule?: ConfigModule) {

    if (mod.useShortPrefix === 'inapplicable' && configModule?.useShortPrefix !== undefined) {
      throw Error('Setting useShortPrefix is innaplicable for the module ' + mod.name);
    }
    
    if (mod.useShortAttribute === 'inapplicable' && configModule?.useShortAttribute !== undefined) {
      throw Error('Setting useShortAttribute is innaplicable for the module ' + mod.name);
    }
    this.useShortAttribute = (
      configModule?.useShortAttribute ||
      config.useShortAttribute ||
      mod.useShortAttribute) as boolean;

    if (mod.useShortValue === 'inapplicable' && configModule?.useShortValue !== undefined) {
      throw Error('Setting useShortValue is innaplicable for the module ' + mod.name);
    }
    this.useShortValue = (
      configModule?.useShortValue ||
      config.useShortValue ||
      mod.useShortValue) as boolean;

    this.prefix = config.prefix ? `${config.prefix}` : '';

    if (configModule?.prefix) {
      if (this.prefix !== '') this.prefix += '-';
      this.prefix += `${configModule.useShortPrefix ? configModule.shortPrefix : configModule.prefix}`
    } else if (mod.prefix) {
      if (this.prefix !== '') this.prefix += '-';
      this.prefix += `${mod.useShortPrefix ? mod.shortPrefix : mod.prefix}`
    }

    this.breakpoints = configModule?.breakpoints || config.breakpoints || mod.breakpoints;
    this.custom = configModule?.custom;
    if (mod.value === 'default' && configModule && configModule.value !== 'default') {
      throw Error('Module ' + mod.name + ' only accept "default" value');
    } else {
      this.value = configModule?.value || mod.value;
    }

    if (mod.dependencies) {
      mod.dependencies?.forEach(d => {
        this.moduleDependencies.set(d.module, undefined);
      });
    }
  }

  getDependencyContext(mod: Module): BuildContext {
    if (!this.moduleDependencies.has(mod)) {
      throw Error('The module ' + mod.name + ' is not a dependency valid for ' + this.mod);
    }

    let buildContext = this.moduleDependencies.get(mod);

    if (!buildContext) {
      const configModule = this.config.modules?.find(cm => cm.name == mod.name);
      buildContext = new BuildContext(this.builder, this.config, mod, configModule);
      this.moduleDependencies.set(mod, buildContext);
    }

    return buildContext;
  }

  append(...options: (AttributePayload|ValuePayload|StylePayload)[]): BuildContext {

    let a: AttributePayload = {};
    let v: ValuePayload = {};
    let s: StylePayload = {};

    options.forEach(o => {
      if ((o as AttributePayload).attribute) {
        const _a = o as AttributePayload;
        if (a.attribute || a.shortAttribute) {
          throw Error(`Multiple attribute parts is not allowed: ${a.attribute}, ${_a.attribute}. Module: ${this.mod.name}`)
        }
        a = _a;
      } else if ((o as ValuePayload).value) {
        const _v = o as ValuePayload;
        if (v.value || v.shortValue) {
          throw Error(`Multiple value parts is not allowed: ${v.value}, ${_v.value}. Module: ${this.mod.name}`)
        }
        v = _v;
      } else if ((o as StylePayload).style) {
        const _s = o as StylePayload;
        if (s.style) {
          throw Error(`Multiple style parts is not allowed: ${s.style}, ${_s.style}. Module: ${this.mod.name}`)
        }
        s = _s;
      }
    });

    this.builder.append(this, a, v, s);
    return this;
  }
}