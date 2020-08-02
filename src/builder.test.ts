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
});