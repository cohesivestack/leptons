import { Config, ConfigModule, schemaErrors, parse } from './config';

describe("Config", () => {

  test("Scheme should be parsed correctly without errors", () => {

    const plainConfig = {
      package: "default",
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

    expect(config.package).toBe('default');

    expect(modules[0].name).toBe('a');
    expect(modules[0].value).toBe('default');

    expect(modules[1].name).toBe('b');
    expect(modules[1].value).toBe(12);

  });

});
