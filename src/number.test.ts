import { Atom } from "./atom";
import { Builder } from "./builder";
import { Module } from "./module";
import { isNumberValid } from "./number";

describe("Number", () => {
  test("atomToCssStyle should create css styles with numbers", () => {

    const styles: { [key: string]: string } = {
      "s-{number}":  "size: {number};"
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();
    builder.addModule(module);

    const cssItem = new Atom("t-s-2", builder).toCss(module)[""].cssStyle;
    expect(cssItem).toBe("size: 2;");
  });

  test("isNumberValid should validate number", () => {
    expect(isNumberValid("2")).toBe(true);
    expect(isNumberValid("2.1")).toBe(true);
    expect(isNumberValid("2px")).toBe(false);
    expect(isNumberValid("x")).toBe(false);
  });
});