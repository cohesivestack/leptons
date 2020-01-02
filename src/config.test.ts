import { Config, ConfigModule, schemaErrors, parse, getInitConfig } from './config';
import { pkg as defaultPkg } from './default';

describe("Config", () => {

  test("should parse the scheme correctly without errors", () => {

    const plainConfig = {
      breakpoints: {"a": 12, "b": 10, "c": 34},
      modules: [
        { "a": "default" },
        { "b": 12 },
        { "c": "value" },
        { "d": [1,23,4] },
        { "d": ["value", 1,23,4] }
      ]
    }

    expect(schemaErrors(plainConfig)).toBeFalsy();

    const config = parse(plainConfig) as Config;
    const modules = config.modules as ConfigModule[];

    expect(config.breakpoints?.a).toBe(12);

    expect(modules[0].name).toBe('a');
    expect(modules[0].value).toBe('default');

    expect(modules[1].name).toBe('b');
    expect(modules[1].value).toBe(12);

  });

  test("should return yaml content with the Init function", () => {
    const output = getInitConfig(defaultPkg);

    expect((new RegExp(/^breakpoints:\n/)).test(output)).toBe(true);
  });

});
