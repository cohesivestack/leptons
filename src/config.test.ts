import { Config, schemaErrors, parse, getInitConfig, parseFromYaml } from './config';
import { UnitType } from './unit-type';
import { initPackage } from './default';

describe("Config", () => {

  test("should parse the scheme correctly without errors", () => {

    const plainConfig = {
      unit: "em",
      breakpoints: {"a": 12, "b": 10, "c": 34},
      source: ['a/*.html', '/b/*.md'],
      prefix: "x",
      css: "body { padding: 0; }"
    }

    expect(schemaErrors(plainConfig)).toBeFalsy();

    const config = parse(plainConfig) as Config;
    const source = config.source as string[];
    const unit = config.unit as UnitType;

    expect(unit).toBe(UnitType.Em);
    expect(config.breakpoints?.a).toBe(12);
    expect(config.prefix).toBe("x");

    expect(source[0]).toBe('a/*.html');
    expect(source[1]).toBe('/b/*.md');
    expect(config.css).toBe("body { padding: 0; }");

  });

  test("should parse from yaml content", () => {

    const yaml = `
source:
  - a/*.html
  - /b/*.md
unit: em
prefix: x
breakpoints:
  A: 12
  B: 10
  C: 34`

    const config = parseFromYaml(yaml) as Config;

    const source = config.source as string[];
    const unit = config.unit as UnitType;

    expect(unit).toBe(UnitType.Em);
    expect(config.breakpoints?.A).toBe(12);
    expect(config.prefix).toBe("x");

    expect(source[0]).toBe('a/*.html');
    expect(source[1]).toBe('/b/*.md');

  });

  test("should return yaml content with the Init function", () => {
    const output = getInitConfig(initPackage());

    expect((new RegExp(/^source:\n/)).test(output)).toBe(true);
  });

});