import { Builder } from "./builder";
import { Dynamic, DynamicParam, DynamicParamType } from "./dynamic";
import { LengthType } from "./length";

describe("DynamicParam", () => {

  test("Params with DynamicParamType.Any", () => {
    [
      "{a}",
      "{ab}",
      "{aB1}",
      "{aaBaB}"
    ].forEach(v => expect(() => new DynamicParam(v)).not.toThrowError());
  });

  test("Incorrect params with DynamicParamType.Any", () => {
    [
      "{1}",
      "{1a}",
      "{__}",
      "{_a}",
      "{*}",
      "{A}",
      "{Aa}",
      "{a-a}",
      "{a_a}",
      "{a a}",
      "a",
      "{a",
      "a}",
    ].forEach(v => expect(() => new DynamicParam(v)).toThrowError());
  });

  test("Params with DynamicParamType system", () => {
    Object.values(DynamicParamType)
      .filter(t => t !== DynamicParamType.Any && t !== DynamicParamType.Custom)
      .flatMap(t => [
        `{a$${t}}`,
        `{aa$${t}}`,
        `{aA$${t}}`,
        `{a1$${t}}`,
        `{aA1$${t}}`
      ]).forEach(v => expect(() => new DynamicParam(v)).not.toThrowError());
  });

  test("Incorrect params with DynamicParamType system", () => {
    Object.values(DynamicParamType)
      .flatMap(t => [
        `{1$${t}}`,
        `{1a$${t}}`,
        `{__$${t}}`,
        `{*$${t}}`,
        `{$$${t}}`,
        `{:$${t}}`,
        `{a-a$${t}}`,
        `{a_a$${t}}`,
        `{a a$${t}}`,
        `a$${t}`,
        `{a$${t}`,
        `a$${t}}`,
      ]).concat(
        Object.values([DynamicParamType.Custom, DynamicParamType.Any]).map(t => `{a$${t}}`)
      ).forEach(v => expect(() => new DynamicParam(v)).toThrowError());
  });

  test("Params with DynamicParamType custom", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      a: {},
      ab: {},
      aB1: {},
      aaBaB: {}
    };

    const builder = new Builder({collections: collections}, false);

    Object.keys(collections)
      .flatMap(t => [
        `{a:${t}}`,
        `{aa:${t}}`,
        `{aA:${t}}`,
        `{a1:${t}}`,
        `{aA1:${t}}`
      ]).forEach(v => expect(() => new DynamicParam(v, builder)).not.toThrowError());
  });

  test("Incorrect params with DynamicParamType custom", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      a: {},
      ab: {},
      aB1: {},
      aaBaB: {}
    };

    const builder = new Builder({collections: collections}, false);

    Object.keys(collections)
      .flatMap(t => [
        `{1:${t}}`,
        `{1a:${t}}`,
        `{__:${t}}`,
        `{*:${t}}`,
        `{::${t}}`,
        `{$:${t}}`,
        `{a-a:${t}}`,
        `{a_a:${t}}`,
        `{a a:${t}}`,
        `a:${t}`,
        `{a:${t}`,
        `a:${t}}`,
      ]).concat(
        Object.values(["unexisting", "unexisting2", ""]).map(t => `{a:${t}}`)
      ).forEach(v => expect(() => new DynamicParam(v, builder)).toThrowError());
  });

  test("Match correctly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px"},
    };

    const builder = new Builder({collections: collections}, false);

    [
      ["{a}", "anything"],
      ["{b$length}", "10px"],
      ["{c$number}", "19"],
      ["{d:col1}", "value1"],
    ].forEach(([param, value]) => {

      try {
        const dynamicParam = new DynamicParam(param, builder);
        expect(dynamicParam.isMatching(value)).toBe(true);
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

  test("Match incorrectly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px"},
    };

    const builder = new Builder({collections: collections}, false);

    [
      ["{a}", ""],
      ["{b$length}", "a"],
      ["{c$number}", "a"],
      ["{d:col1}", "value2"],
    ].forEach(([param, value]) => {

      try {
        const dynamicParam = new DynamicParam(param, builder);
        expect(dynamicParam.isMatching(value)).toBe(false);
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

  test("Parse correctly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px"},
    };
    const builder = new Builder({
      collections: collections,
      lengthType: LengthType.Px,
    }, false);

    [
      ["{a}", "anything", "anything"],
      ["{b$length}", "19", "19px"],
      ["{c$length}", "10rem", "10rem"],
      ["{d$number}", "19", "19"],
      ["{e:col1}", "value1", "1px 2px 3px 4px"],
    ].forEach(([param, value, css]) => {

      try {
        const dynamicParam = new DynamicParam(param, builder);
        expect(dynamicParam.parse(value)).toBe(css);
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

  test("Parse incorrectly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px"},
    };

    const builder = new Builder({collections: collections, lengthType: LengthType.Px}, false);

    [
      ["{a}", ""],
      ["{b$length}", "a"],
      ["{d$number}", "b"],
      ["{e:col1}", "value2"]
    ].forEach(([param, value]) => {

      try {
        const dynamicParam = new DynamicParam(param, builder);
        expect(() => dynamicParam.parse(value)).toThrowError();
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

});

describe("Dynamic", () => {

  test("Match correctly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px", value2: "5px 6px 7px 8px"},
      col2: {value1: "10px 20px 30px 40px", value2: "50px 60px 70px 80px"},
    };

    const builder = new Builder({collections: collections}, false);

    [
      ["{a}", "x: {a};", "anything1"],
      ["{a}_{b$length}", "x: {a}; y: {b};", "anything1_10px"],
      ["{a}_{b$length}_{c$number}", "x: {a}; y: {b}; z: {c};", "anything1_10px_20"],
      ["{a}_{b$length}_{c$number}_{d:col1}", "x: {a}; y: {b}; z: {c}; xx: {d};", "anything1_10px_20_value2"]
    ].forEach(([param, style, value]) => {
      try {
        const dynamic = new Dynamic(param, style, builder);
        expect(dynamic.isMatching(value)).toBe(true);
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

  test("Match incorrectly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px", value2: "5px 6px 7px 8px"},
      col2: {value1: "10px 20px 30px 40px", value2: "50px 60px 70px 80px"},
    };

    const builder = new Builder({collections: collections}, false);

    [
      ["{a}", "x: {a}", ""],
      ["{a}_{b$length}", "x: {a}; y: {b};", "anything1_px"],
      ["{a}_{b$length}_{c$number}", "x: {a}; y: {b}; z: {c};", "anything1_10px_20_30"],
      ["{a}_{b$length}_{c$number}_{d:col1}", "x: {a}; y: {b}; z: {c}; xx: {d};", "anything1_10px_20_value3"]
    ].forEach(([param, style, value]) => {
      try {
        const dynamic = new Dynamic(param, style, builder);
        expect(dynamic.isMatching(value)).toBe(false);
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

  test("Parse correctly", () => {
    const collections: { [collection: string]: { [item: string]: string } } = {
      col1: {value1: "1px 2px 3px 4px", value2: "5px 6px 7px 8px"},
      col2: {value1: "10px 20px 30px 40px", value2: "50px 60px 70px 80px"},
    };

    const builder = new Builder({collections: collections}, false);

    [
      ["{a}", "x: {a};", "anything1", "x: anything1;"],
      ["{a}_{b$length}", "x: {a}; y: {b};", "anything1_10px", "x: anything1; y: 10px;"],
      ["{a}_{b$length}_{c$number}", "x: {a}; y: {b}; z: {c};", "anything1_10px_20", "x: anything1; y: 10px; z: 20;"],
      ["{a}_{b$length}_{c$number}_{d:col2}", "x: {a}; y: {b}; z: {c}; xx: {d};", "anything1_10px_20_value2", "x: anything1; y: 10px; z: 20; xx: 50px 60px 70px 80px;"]
    ].forEach(([param, style, value, css]) => {
      try {
        const dynamic = new Dynamic(param, style, builder);
        expect(dynamic.parse(value)).toBe(css);
      } catch (error) {
        expect(error).toBe(undefined);
      }
    });
  });

});