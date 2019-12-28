import fs from 'fs';
import path from 'path';

import { Media } from './media';
import { BuildContext } from './build-context';
import { Config, isConfigErrors, parse, parseFromYaml, parseFromJson, ConfigError } from './config';
import { pkg as defaultPkg } from './default';


export class Builder {

  private config?: Config;

  private medias = new Map<string, Media>();

  buildFromFile(filePath: string): string {
    const textConfig = fs.readFileSync(filePath, 'utf8');
    const configExtension = path.extname(filePath);

    switch (configExtension) {
      case 'yaml':
      case 'yml':
        return this.buildFromYaml(textConfig);
      case 'json':
        return this.buildFromJson(textConfig);
      default:
        throw Error("Invalid file extension (must be any of: .yaml, .yml or .json)")
    }
  }

  buildFromYaml(yamlConfig: string): string {
    return this.build(parseFromYaml(yamlConfig));
  }

  buildFromJson(jsonConfig: string): string {
    return this.build(parseFromJson(jsonConfig));
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

    if (breakpoints) {
      Object.keys(breakpoints).forEach(name => {
        if (breakpoints) {
          this.medias.set(name, new Media(name, breakpoints[name]));
        }
      });
    }

    pkg.modules.forEach(m => {
      const configModule = config.modules?.find(cm => cm.name == m.name);
      const buildContext = new BuildContext(this, config, m, configModule)

      m.build(buildContext);
    });

    let output = '';
    this.medias.forEach(m => {
      output += m.output + '\n'
    })

    return output
  }

  appendWithShort(context: BuildContext, name: string, shortName: string, body: string) {
    const className = '.' + context.prefix + shortName;
    this.medias.forEach(m => m.append(className, body));
    return this;
  }

  append(context: BuildContext, name: string, body: string) {
    const className = '.' + context.prefix + name;
    this.medias.forEach(m => m.append(className, body));
    return this;
  }

}