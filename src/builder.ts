import fs from 'fs';
import path from 'path';

import { Media } from './media';
import { BuildContext } from './build-context';
import { Config,
  ConfigError,
  getInitConfig,
  isConfigErrors,
  parse,
  parseFromYaml,
  parseFromJson,
  ConfigModule} from './config';
import { pkg as defaultPkg } from './default';
import { AttributePayload, ValuePayload, StylePayload } from './atom';
import { Module } from './module';

export type Attribute = (attribute: string, shortAttribute?: string) => AttributePayload;
export type Value = (value: string, shortValue?: string) => ValuePayload;
export type Style = (style: string) => StylePayload;

export class AppendOptions {
  attribute?: string;
  shortAttribute?: string;
  value?: string;
  shortValue?: string;
  style?: string;
  shortStyle?: string;

  hasAttribute(): boolean {
    return this.has(this.attribute);
  }

  hasShortAttribute(): boolean {
    return this.has(this.shortAttribute);
  }

  hasValue(): boolean {
    return this.has(this.value);
  }

  hasShortValue(): boolean {
    return this.has(this.shortValue);
  }

  hasStyle(): boolean {
    return this.has(this.style);
  }

  hasShortStyle(): boolean {
    return this.has(this.shortStyle);
  }

  private has(v?: string): boolean {
    return v !== undefined && v.trim().length > 0;
  }
}

export class Builder {

  private config?: Config;
  private medias: Media[] = [];
  private moduleEntries = new Map<string, {module: Module, context: BuildContext | undefined} >();

  init(filePath: string, minimum = false) {
    if (fs.existsSync(filePath)) {
      throw Error("Error: a file '" + filePath + "' already exists");
    } else {
      fs.writeFileSync(filePath, getInitConfig(defaultPkg, minimum));
    }
  }

  buildFromFile(configFilePath: string): string {
    const textConfig = fs.readFileSync(configFilePath, 'utf8');
    const configExtension = path.extname(configFilePath);

    switch (configExtension) {
      case '.yaml':
      case '.yml':
        return this.buildFromYaml(textConfig);
      case '.json':
        return this.buildFromJson(textConfig);
      default:
        throw Error('Invalid file extension (must be any of: .yaml, .yml or .json)');
    }
  }

  buildFromFileToFile(configFilePath: string, outputFilePath: string) {
    this.writeToFile(outputFilePath, this.buildFromFile(configFilePath));
  }

  buildFromYaml(yamlConfig: string): string {
    return this.build(parseFromYaml(yamlConfig));
  }

  buildFromYamlToFile(yamlConfig: string, outputFilePath: string) {
    this.writeToFile(outputFilePath, this.buildFromYaml(yamlConfig));
  }

  buildFromJson(jsonConfig: string): string {
    return this.build(parseFromJson(jsonConfig));
  }

  buildFromJsonToFile(jsonConfig: string, outputFilePath: string) {
    this.writeToFile(outputFilePath, this.buildFromJson(jsonConfig));
  }

  buildFromPlainConfig(plainConfig: any): string {
    return this.build(parse(plainConfig));
  }

  public getModuleContextOf(moduleName: string): BuildContext {
    const moduleEntry = this.moduleEntries.get(moduleName);
    if (!moduleEntry) {
      throw Error(`The module ${moduleName} doesn't exist in the package ${this.config?.package}`);
    }

    var cm = this.config?.modules?.find(cm => cm.name == moduleName);
    return this.getOrBuildModuleContext(moduleEntry.module, cm);
  }

  private getOrBuildModuleContext(m: Module, cm: ConfigModule | undefined): BuildContext {
    const config = this.config as Config;
    let moduleEntry = this.moduleEntries.get(m.name);

    if (!moduleEntry || !moduleEntry.context) {
      moduleEntry = {module: m, context: new BuildContext(this, config, m, cm)};

      this.moduleEntries.set(m.name, moduleEntry)
      m.build(moduleEntry?.context as BuildContext);
    }

    return moduleEntry?.context as BuildContext;
  }

  private build(plainConfig: any): string {

    const pkg = defaultPkg;

    // Validate config
    if (isConfigErrors(plainConfig)) {
      const errors = plainConfig as ConfigError[];

      let reportErrors = '';
      errors.forEach(e => {
        reportErrors += '  ' + e.path + ' -> ' + e.message + '\n';
      })

      throw Error("Errors parsing plain object:\n" + reportErrors);
    }

    // Validate modules
    this.config = plainConfig;
    const config = this.config as Config;

    config.modules?.forEach(cm => {
      const m = pkg.modules.find(m => m.name == cm.name);
      if (!m)
        throw Error('The package ' + pkg.name + " doesn't provide a module " + cm.name);
    });

    // Set module contexts
    const includeAll = config.includeAll !== false;

    if (includeAll) {
      pkg.modules.forEach(m => {
        const cm = this.config?.modules?.find(cm => cm.name == m.name);
        this.getOrBuildModuleContext(m, cm);
      });
    } else {
      config.modules?.forEach(cm => {
        const m = pkg.modules.find(m => m.name == cm.name) as Module;
        this.getOrBuildModuleContext(m, cm);
      });
    }

    // Set media breakpoints
    const breakpoints = config.breakpoints || pkg.breakpoints;

    this.medias.push(new Media());

    if (breakpoints) {
      Object.keys(breakpoints).forEach(name => {
        if (breakpoints) {
          this.medias.push(new Media(name, breakpoints[name]));
        }
      });
    }

    // Add modules to medias
    this.moduleEntries.forEach(me => {
      me.context?.atoms.forEach(atom => {
        const className = config.prefix ?
          `.${config.prefix}-${atom.className}` :
          `.${atom.className}`;
        this.medias.forEach(m => m.append(me.module, className, atom.style))
      });
    });

    // Add classes to medias
    config.classes?.forEach(c => {
      const className = config.prefix ? `.${config.prefix}-${c.name}` : `.${c.name}`;

      if (c.breakpoints === undefined || c.breakpoints === true) {
        this.medias.forEach(m => m.appendClass(className, c.value));
      } else {
        this.medias[0].appendClass(className, c.value);
      }
    });

    let output = '';
    this.medias.forEach(m => {
      output += m.output + '\n'
    })

    if (config.css) {
      output += '/* Custom CSS */\n';
      output += config.css;
    }

    return output
  }

  private writeToFile(outputFilePath: string, cssContent: string) {
    fs.writeFileSync(outputFilePath, cssContent);
  }

}