import {
  isStyleString,
  isStyleFunc,
  isStyleItemFunc,
  isValidStyleLiteral,
  isValidStringItem,
  Style
} from "./style";
import { stringify } from "querystring";
import { Builder } from "./builder";

describe("Style", () => {

  test("isStyleString", () => {
    [
      "b-t-c",
      "b-{c}",
      "any string"
    ].forEach(v => expect(isStyleString(v)).toBe(true));
    
    expect(isStyleString((b: Builder, v: string) => v)).toBe(false);
    expect(isStyleString(["a", (b: Builder, v: string) => v])).toBe(false);

  });

  test("isStyleFunc", () => {

    expect(isStyleFunc((b: Builder, v: string) => v)).toBe(true);

    expect(isStyleFunc("a-b-c")).toBe(false);
    expect(isStyleFunc(["a", (b: Builder, v: string) => v])).toBe(false);

  });

  test("isStyleItemFunc", () => {

    expect(isStyleItemFunc(["a", (b: Builder, v: string) => v])).toBe(true);
    
    expect(isStyleItemFunc("a-b-c")).toBe(false);
    expect(isStyleItemFunc((b: Builder, v: string) => v)).toBe(false);

  });

  test("isStyleStringLiternal", () => {
    [
      "b-t-c",
      "ab-at-ac",
      "b-c",
      "c"
    ].forEach(v => expect(isValidStyleLiteral(v)).toBe(true));

    [
      "b-c-d-e",
      "b-c-{d}",
      "b-c-d-",
      "b-c-0",
      "b-c--a"
    ].forEach(v => expect(isValidStyleLiteral(v)).toBe(false));
  });

  test("isStyleStringItem", () => {
    [
      "b-t-{c}",
      "ab-at-{ac}",
      "b-{c}",
      "{c}",
    ].forEach(v => expect(isValidStringItem(v)).toBe(true));

    [
      "0-t-{c}",
      "0-t--{c}",
      "b0-t-{c}",
      "b-c-d",
      "b-c-{d}-",
      "b-c-{0}",
      "b-c-{a}{a}",
      "b-{t}-c",
      "{b}-t-c"
    ].forEach(v => expect(isValidStringItem(v)).toBe(false));

  });
});