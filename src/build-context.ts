import { Breakpoints } from './breakpoints';
import { Module, ModuleValue } from './module';
import { Config, ConfigModule } from './config';
import { Builder } from "./builder";

export class BuildContext {
  private moduleDependencies = new Map<Module, BuildContext | undefined>();

  readonly prefix?: string;
  readonly useShortName?: boolean;
  readonly breakpoints?: Breakpoints;
  readonly custom?: any;
  readonly value: ModuleValue;

  constructor(
    private builder: Builder,
    private config: Config,
    public readonly mod: Module,
    configModule?: ConfigModule) {

    this.prefix = configModule?.prefix || mod.prefix;
    this.breakpoints = configModule?.breakpoints || mod.breakpoints || config.breakpoints;
    this.custom = configModule?.custom;
    if (mod.value === 'default' && configModule && configModule.value !== 'default') {
      throw Error('Module ' + mod.name + ' only accept "default" value');
    } else {
      this.value = configModule?.value || mod.value;
    }

    if (mod.useShortName === 'inapplicable' && configModule?.useShortName !== undefined) {
      throw Error('Setting useShortName is innaplicable for the module ' + mod.name);
    } else {
      this.useShortName = configModule?.useShortName || config.useShortName;
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

  append(name: string, body: string): BuildContext {
    this.builder.append(this, name, body);
    return this;
  }

  appendWithShort(name: string, shortName: string, body: string): BuildContext {
    this.builder.appendWithShort(this, name, shortName, body);
    return this;
  }
}