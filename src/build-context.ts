import { Breakpoints } from './breakpoints';
import { Module, ModuleValue } from './module';
import { Config, ConfigModule } from './config';
import { Atom, AttributePayload, ValuePayload, StylePayload } from './atom';
import { Builder } from "./builder";

export class BuildContext {
  private moduleDependencies = new Map<Module, BuildContext | undefined>();

  readonly prefix?: string;
  readonly useShortAttribute?: boolean;
  readonly useShortValue?: boolean;
  readonly breakpoints?: Breakpoints;
  readonly atoms: Atom[] = [];
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

  getDependencyContext(modName: string): BuildContext {
    return this.builder.getModuleContextOf(modName);
  }

  append(...payloads: (AttributePayload|ValuePayload|StylePayload)[]): BuildContext {
    this.atoms.push(new Atom(this, payloads));

    return this;
  }
}