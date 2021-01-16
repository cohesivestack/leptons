import { schemaErrors, Config, parseFromYaml, getInitConfig, parse } from "./config";
import { Source } from "./source";
import { LengthType } from "./length";
import { clearIdentForTesting } from "./util";

describe("Config", () => {
  test("should parse the scheme correctly without errors", () => {

    const plainConfig = {
      lengthType: "em",
      medias: {
        A: "screen and (min-width: 16rem)",
        B: "screen and (min-width: 32rem)"
      },
      source: {
        html: ['a/*.html', '/b/*.htm'],
        react: '**/*.tsx'
      },
      cssBefore: "body { padding: 0; }",
      cssAfter: "a { text-decoration: none; }"
    }

    expect(schemaErrors(plainConfig)).toBeFalsy();

    const config = parse(plainConfig) as Config;
    const source = config.source as Source;
    const unit = config.lengthType as LengthType;

    expect(unit).toBe(LengthType.Em);
    expect(config.medias?.A).toBe("screen and (min-width: 16rem)");
    expect(config.medias?.B).toBe("screen and (min-width: 32rem)");

    expect(source.html).toStrictEqual(['a/*.html', '/b/*.htm']);
    expect(source.react).toBe('**/*.tsx');
    expect(config.cssBefore).toBe("body { padding: 0; }");
    expect(config.cssAfter).toBe("a { text-decoration: none; }");

  });

  test("should parse from yaml content", () => {

    const yaml = clearIdentForTesting(`
      lengthType: em
      medias:
        A: "screen and (min-width: 16rem)"
        B: "screen and (min-width: 32rem)"
      source:
        html:
          - a/*.html
          - /b/*.htm
        react: "**/*.tsx"
      cssBefore: "body { padding: 0; }"
      cssAfter: "a { text-decoration: none; }"`);

    const config = parseFromYaml(yaml) as Config;
    const source = config.source as Source;
    const lengthType = config.lengthType as LengthType;

    expect(lengthType).toBe(LengthType.Em);
    expect(config.medias?.A).toBe("screen and (min-width: 16rem)");
    expect(config.medias?.B).toBe("screen and (min-width: 32rem)");

    expect(source.html).toStrictEqual(['a/*.html', '/b/*.htm']);
    expect(source.react).toBe('**/*.tsx');
    expect(config.cssBefore).toBe("body { padding: 0; }");
    expect(config.cssAfter).toBe("a { text-decoration: none; }");

  });

  test("should return yaml content with the Init function", () => {
    const output = getInitConfig();

    expect((new RegExp(/^source:\n/)).test(output)).toBe(true);
  });
});