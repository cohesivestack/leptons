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

  build(plainConfig: any): string {

    const pkg = defaultPkg;

    const configOutput = parse(plainConfig);
    if (isConfigErrors(configOutput)) {
      const errors = configOutput as ConfigError[];

      let reportErrors = '';
      errors.forEach(e => {
        reportErrors += '  ' + e.path + ' -> ' + e.message + '\n';
      })

      throw Error("Errors parsing plain object:\n" + reportErrors);
    }

    this.config = configOutput;
    const config = this.config as Config;

    const breakpoints = this.config.breakpoints || pkg.breakpoints;


    this.medias.push(new Media());

    if (breakpoints) {
      Object.keys(breakpoints).forEach(name => {
        if (breakpoints) {
          this.medias.push(new Media(name, breakpoints[name]));
        }
      });
    }

    // undefined or true is true
    const includeAll = this.config.includeAll !== false;

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

    let output = '';
    this.medias.forEach(m => {
      output += m.output + '\n'
    })

    return output
  }

  buildToFile(plainConfig: any, outputFilePath: string) {
    this.writeToFile(outputFilePath, this.build(plainConfig));
  }

  private writeToFile(outputFilePath: string, cssContent: string) {
    fs.writeFileSync(outputFilePath, cssContent);
  }

  appendWithShort(context: BuildContext, name: string, shortName: string, body: string) {
    const className = '.' + context.prefix + shortName;
    this.medias.forEach(m => m.append(context.mod, className, body));
    return this;
  }

  append(context: BuildContext, name: string, body: string) {
    const className = '.' + context.prefix + name;
    this.medias.forEach(m => m.append(context.mod, className, body));
    return this;
  }

}