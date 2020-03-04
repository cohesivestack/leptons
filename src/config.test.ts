import { Config, ConfigModule, schemaErrors, parse } from './config';
import { UnitType } from './unit-type';

describe("Config", () => {

  test("should parse the scheme correctly without errors", () => {

    const plainConfig = {
      unit: "em",
      breakpoints: {"a": 12, "b": 10, "c": 34},
      source: ['a/*.html', '/b/*.md'],
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
    const source = config.source as string[];
    const unit = config.unit as UnitType;

    expect(unit).toBe(UnitType.Em);
    expect(config.breakpoints?.a).toBe(12);

    expect(modules[0].name).toBe('a');
    expect(modules[0].value).toBe('default');

    expect(modules[1].name).toBe('b');
    expect(modules[1].value).toBe(12);

    expect(source[0]).toBe('a/*.html');
    expect(source[1]).toBe('/b/*.md');

  });
});
