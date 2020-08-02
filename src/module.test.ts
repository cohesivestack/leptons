import { Module } from "./module";
import { Style } from "./style";
import { BuilderContext } from "./builder-context";

describe("Module", () => {
  test("Create module with all types of styles", () => {

    const styles: { [key: string]: Style } = {
      "s-a":         "background-size: auto;",
      "p-{length}":  "background-position: {length};",
      "w-{weight}": ["font-weight: {weight}", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
      "u-{custom}":   (c: BuilderContext, v: string) => `unknown: ${v}`,
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    expect(module.getLiteral("s-a")).toBe(styles["s-a"]);

    const item = module.getItem("p");
    expect(item?.itemName).toBe("length");
    expect(item?.style).toBe(styles["p-{length}"]);

    const itemFunction = module.getItemFunction("w");
    expect(itemFunction?.itemName).toBe("weight");
    expect(itemFunction?.style).toBe(styles["w-{weight}"]);

    expect(module.getFunction("w")).toBe(styles["w"]);
  });
});