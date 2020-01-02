import Ajv from 'ajv';
import yaml from 'js-yaml';

import { Package } from './package';
import { ModuleValue } from './module';
import { Breakpoints } from './breakpoints';

export type ConfigError = {
  path: string,
  message?: string
}

export type ConfigModule = {
  name: string,
  prefix?: string,
  useShortName?: boolean,
  breakpoints?: Breakpoints,
  custom?: any,
  value: ModuleValue
}

export type Config = {
  package: string,
  prefix?: string,
  useShortName?: boolean,
  includeAll?: boolean,
  breakpoints?: Breakpoints,
  modules?: ConfigModule[]
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
    prefix: { type: "string" },
    useShortName: { type: "boolean" },
    includeAll: { type : "boolean" },
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
          },
          prefix: { type: "string" },
          useShortName: { type: "boolean" },
          breakpoints: {
            type: "object",
            patternProperties: {
              ".+": { type: "number" }
            }
          },
          custom: { type: ["object", "string", "number", "integer", "array"] }
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

  const config = {...plainConfig, modules: []}

  for (let i = 0; i < plainConfig.modules.length; i++) {

    const _module = plainConfig.modules[i];
    const newModule = {..._module};
    const moduleName = Object.keys(_module)[0];

    delete newModule[moduleName];

    newModule.name = moduleName;
    newModule.value = _module[moduleName];

    config.modules.push(newModule);
  }

  return config as Config;
}

export function getInitConfig(pkg: Package, minimum = false): string {
  const config = {
    breakpoints: pkg.breakpoints,
    modules: pkg.modules.filter(m => m.initExplicit).map(m => {
      var value: any;
      if (minimum) {
        if (m.minimumValue !== undefined) {
          value = m.minimumValue;
        } else if (Array.isArray(m.value)) {
          value = [];
        } else if (typeof m.value === 'object') {
          value = {};
        } else {
          value = m.value;
        }
      } else {
        value = m.value;
      }

      const om: any = {};
      om[m.name] = value;
      return om;
    })
  };
  return yaml.dump(config, {flowLevel: 3});
}