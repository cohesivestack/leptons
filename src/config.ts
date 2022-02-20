import fs from "fs";
import path from "path";
import Ajv, { ErrorObject } from "ajv";
import yaml from "js-yaml";
import { configSchema } from "./config-schema"
import { LengthType } from "./length";
import { Source } from "./source";

export type Config = {
  source?: Source
  output?: string
  medias?: { [index: string]: string }
  lengthType?: LengthType
  fonts?: { [index: string]: string }
  colors?: { [index: string]: string }
  shadows?: { [index: string]: string }
  animations?: { [index: string]: string }
  urls?: { [index: string]: string }
  areaTemplate?: { [index: string]: string }
  collections?: { [index: string]: { [index: string]: string } }
  classes?: { [index: string]: string }
  aliases?: string[]
  components?: { [index: string]: string }
  items?: { [index: string]: { [index: string]: number } }
  include?: string
  exclude?: string
  cssBefore?: string
  cssAfter?: string
}

export function isConfig(config: Config | ErrorObject[]): config is Config {
  return (config as Config).source !== undefined;
}

export function isSchemaErrors(configErrors: Config | ErrorObject[]): configErrors is ErrorObject[] {
  return (configErrors as ErrorObject[]).length !== undefined;
}

export function schemaErrors(plainConfig: any): ErrorObject[] | null {

  const ajv = new Ajv({allErrors: true});
  const validate = ajv.compile(configSchema);
  const valid = validate(plainConfig);

  if (!valid) {
    return validate.errors as ErrorObject[];
  }

  return null;
}

export function parseFromYaml(yamlConfig: string): (Config | ErrorObject[]) {
  return parse(yaml.load(yamlConfig, {schema: yaml.DEFAULT_SCHEMA}));
}

export function parseFromJson(jsonConfig: string): (Config | ErrorObject[]) {
  return parse(JSON.parse(jsonConfig));
}

export function parseFromFile(configFilePath: string): (Config | ErrorObject[]) {
  const textConfig = fs.readFileSync(configFilePath, 'utf8');
  const configExtension = path.extname(configFilePath);

  switch (configExtension) {
    case '.yaml':
    case '.yml':
      return textConfig.trim().length === 0 ? {} : parseFromYaml(textConfig);
    case '.json':
      return textConfig.trim().length === 0 ? {} : parseFromJson(textConfig);
    default:
      throw Error('Invalid file extension (must be any of: .yaml, .yml or .json)');
  }
}

export function parse(plainConfig: any): (Config | ErrorObject[]) {
  const errors = schemaErrors(plainConfig);
  if (errors) {
    return errors;
  }

  const config = {...plainConfig}

  return config as Config;
}

export function init(filePath: string, output?: string) {

  if (fs.existsSync(filePath)) {
    throw Error("Error: a file '" + filePath + "' already exists");
  } else {
    fs.writeFileSync(filePath, getInitConfig(output));
  }
}

export function getInitConfig(output?: string): string {
  const config: Config = {
    source: { html: ["*.htm", "*.html"] },
    output: output || "./leptons.css",
    lengthType: LengthType.Rem,
    medias: {
      M: "screen and (min-width: 48rem)",
      L: "screen and (min-width: 64rem)"
    }
  };
  return yaml.dump(config, {flowLevel: 3});
}