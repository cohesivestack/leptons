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
  parseFromJson } from './config';
import { pkg as defaultPkg } from './default';

export type AttributePayload = {
  attribute?: string,
  shortAttribute?: string
}

export type ValuePayload = {
  value?: string,
  shortValue?: string
}

export type StylePayload = {
  style?: string
}

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

  private build(plainConfig: any): string {

    const pkg = defaultPkg;

    if (isConfigErrors(plainConfig)) {
      const errors = plainConfig as ConfigError[];

      let reportErrors = '';
      errors.forEach(e => {
        reportErrors += '  ' + e.path + ' -> ' + e.message + '\n';
      })

      throw Error("Errors parsing plain object:\n" + reportErrors);
    }

    this.config = plainConfig;
    const config = this.config as Config;

    const breakpoints = config.breakpoints || pkg.breakpoints;


    this.medias.push(new Media());

    if (breakpoints) {
      Object.keys(breakpoints).forEach(name => {
        if (breakpoints) {
          this.medias.push(new Media(name, breakpoints[name]));
        }
      });
    }

    // undefined or true is true
    const includeAll = config.includeAll !== false;

    if (includeAll) {
      pkg.modules.forEach(mod => {
        const configModule = config.modules?.find(cm => cm.name == mod.name);
        const buildContext = new BuildContext(this, config, mod, configModule)

        mod.build(buildContext);
      });
    } else {
      config.modules?.forEach(cm => {
        const m = pkg.modules.find(m => m.name == cm.name);
        if (!m)
          throw Error('The package ' + pkg.name + " doesn't provide a module " + cm.name);
        const buildContext = new BuildContext(this, config, m, cm);

        m.build(buildContext);
      });
    }

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

  appendWithShort(context: BuildContext, name: string, shortName: string, body: string) {
    const className = '.' + context.prefix + shortName;
    this.medias.forEach(m => m.append(context.mod, className, body));

    return this;
  }

  append(c: BuildContext, a: AttributePayload, v: ValuePayload, s: StylePayload) : Builder {
    if (!s.style) {
      throw Error(`Style is required for ${c.mod.name} ${a?.attribute} ${v?.value}`);
    }

    let className = '.';
    if (c.prefix) className += c.prefix;

    if (a.attribute) {
      if (className !== '.') className += '-';
      className += `${c.useShortAttribute && a.shortAttribute ? a.shortAttribute : a.attribute}`;
    }

    if (v.value) {
      if (className !== '.') className += '-';
      className += `${c.useShortValue && v.shortValue ? v.shortValue : v.value}`;
    }

    this.medias.forEach(m => m.append(c.mod, className, s?.style as string));
    return this;
  }

}