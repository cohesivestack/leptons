import { Module } from "./module";
import { Style } from "./style";
import { BuilderContext } from "./builder-context";
import { Builder } from "./builder";
import { Atom } from "./atom";

describe("Builder", () => {
  test("atomToCssStyle should create css styles", () => {

    const styles: { [key: string]: Style } = {
      "s-a":         "background-size: auto;",
      "p-{length}":  "background-position: {length};",
      "w-{weight}": ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
      "u-{custom}":   (c: BuilderContext, v: string) => `unknown: ${v};`,
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();

    const cssLiteral = builder.atomToCssStyle(module, new Atom("t-s-a"));
    expect(cssLiteral).toBe("background-size: auto;");

    const cssItem = builder.atomToCssStyle(module, new Atom("t-p-2px"));
    expect(cssItem).toBe("background-position: 2px;");

    const cssItemFunction = builder.atomToCssStyle(module, new Atom("t-w-3"));
    expect(cssItemFunction).toBe("font-weight: 300;");

    const cssItemFunc = builder.atomToCssStyle(module, new Atom("t-u-value"));
    expect(cssItemFunc).toBe("unknown: value;");
  });

  test("addClassName should add the Classname for each type of style", () => {

    const styles: { [key: string]: Style } = {
      "s-a":        "background-size: auto;",
      "p-{length}": "background-position: {length};",
      "w-{weight}": ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
      "u-{custom}": (c: BuilderContext, v: string) => `unknown: ${v};`,
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();
    builder.addModule(module);

    const classNameLiteral = "t-s-a";
    const classNameItem = "t-p-10px";
    const classNameItemFunction = "t-w-3";
    const classNameFunction = "t-u-any";

    builder.addClassName(classNameLiteral);
    builder.addClassName(classNameItem);
    builder.addClassName(classNameItemFunction);
    builder.addClassName(classNameFunction);

    expect((builder as any).medias[""].classes[classNameLiteral]).toBe("background-size: auto;")
    expect((builder as any).medias[""].classes[classNameItem]).toBe("background-position: 10px;")
    expect((builder as any).medias[""].classes[classNameItemFunction]).toBe("font-weight: 300;")
    expect((builder as any).medias[""].classes[classNameFunction]).toBe("unknown: any;")
  });

  test("addClassName should add the Classname for different medias", () => {

    const styles: { [key: string]: Style } = {
      "w-{weight}": ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder({
      medias: {
        M: "only screen and (max-width: 48rem)",
        L: "only screen and (max-width: 64rem)"
      }
    });
    builder.addModule(module);

    const defaultMedia = "t-w-3";
    const mediumMedia = "t-w-3-M";
    const largeMedia = "t-w-3-L";

    builder.addClassName(defaultMedia);
    builder.addClassName(mediumMedia);
    builder.addClassName(largeMedia);

    expect((builder as any).medias[""].classes[defaultMedia]).toBe("font-weight: 300;");
    expect((builder as any).medias["M"].classes[defaultMedia]).toBeUndefined();
    expect((builder as any).medias["L"].classes[defaultMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[mediumMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[mediumMedia]).toBe("font-weight: 300;");
    expect((builder as any).medias["L"].classes[mediumMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["L"].classes[largeMedia]).toBe("font-weight: 300;");
  });
});