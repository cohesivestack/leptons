import fs from 'fs';
import Ajv from 'ajv';
import yaml from 'js-yaml';

import { Breakpoints } from './breakpoints';
import { UnitType } from './unit-type';
import { initPackage } from './default';
import { Package } from './package';

export type ConfigError = {
  path: string,
  message?: string
}

export type ConfigModule = {
  name: string,
  value: 'default' | any
}

export type Config = {
  package?: string,
  source: string[],
  prefix?: string,
  unit?: UnitType,
  breakpoints?: Breakpoints,
  modules?: ConfigModule[],
}

export function isConfig(config: Config | ConfigError[]): config is Config {
  return (config as Config).package !== undefined;
}

export function isConfigErrors(configErrors: Config | ConfigError[]): configErrors is ConfigError[] {
  return (configErrors as ConfigError[]).length !== undefined;
}

const schema = {
  properties: {
    package: { type: "string" },
    source: {
      type: "array",
      items: {
        type: "string"
      }
    },
    prefix: { type: "string" },
    unit: {
      type: "string",
      enum: [
        "mm",
        "cm",
        "in",
        "px",
        "pt",
        "pc",
        "em",
        "ex",
        "ch",
        "rem",
        "vw",
        "vh",
        "vmin",
        "vmax",
        "p"
      ]
    },
    breakpoints: {
      type: "object",
      patternProperties: {
        ".+": { type: "number" }
      }
    },
    modules: {
      type: "array",
      items: {
        type: "object",
        properties: {
          ".+": {
            oneOf: [
              {
                type: "string",
                pattern: "^default$"
              },
              {
                type: ["object", "string", "number", "integer", "array"]
              }
            ]
          }
        }
      }
    }
  },
  additionalProperties: false
};

export function schemaErrors(plainConfig: any): ConfigError[] | null {

  const ajv = new Ajv({allErrors: true});
  const validate = ajv.compile(schema);
  const valid = validate(plainConfig);

  if (!valid) {
    const errors : ConfigError[] = [];

    validate.errors?.forEach(err => {
      errors.push({
        path: err.dataPath,
        message: err.message
      })
    });

    return errors;
  }
  
  return null;
}

export function parseFromYaml(yamlConfig: string): (Config | ConfigError[]) {
  return parse(yaml.safeLoad(yamlConfig, {schema: yaml.DEFAULT_FULL_SCHEMA}));
}

export function parseFromJson(jsonConfig: string): (Config | ConfigError[]) {
  return parse(JSON.parse(jsonConfig));
}

export function parse(plainConfig: any): (Config | ConfigError[]) {
  const errors = schemaErrors(plainConfig);
  if (errors) {
    return errors;
  }

  const config = {...plainConfig}

  return config as Config;
}

export function init(filePath: string, source?: string[]) {
  const defaultPackage = initPackage();

  if (fs.existsSync(filePath)) {
    throw Error("Error: a file '" + filePath + "' already exists");
  } else {
    fs.writeFileSync(filePath, getInitConfig(defaultPackage, source));
  }
}

export function getInitConfig(pkg: Package, source?: string[]): string {
  const config = {
    source: source || ["*.htm", "*.html"],
    unit: "em",
    breakpoints: pkg.breakpoints
  };
  return yaml.dump(config, {flowLevel: 3});
}