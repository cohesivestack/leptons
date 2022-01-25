import {
  isValidStringLiteral,
  isValidStringDynamic,
  isValidStringKeyword
} from "./style";

describe("Style", () => {

  test("isStyleStringLiternal", () => {
    [
      "b-t-c",
      "ab-at-ac",
      "b-c",
      "c"
    ].forEach(v => expect(isValidStringLiteral(v)).toBe(true));

    [
      "b-c-d-e",
      "b-c-{d}",
      "b-c-d-",
      "b-c-0",
      "b-c:a"
    ].forEach(v => expect(isValidStringLiteral(v)).toBe(false));
  });

  test("isStyleStringDynamic", () => {
    [
      "b-t-{c}",
      "ab-at-{ac}",
      "b-{c}",
      "{c}",
      "b-t-{c0}_{d1}",
      "ab-at-{ac}_{ad}",
      "b-{c}_{d}",
      "{c}_{d}",
      "{c$a}",
      "{c:a}",
    ].forEach(v => expect(isValidStringDynamic(v)).toBe(true));

    [
      "0-t-{c}",
      "0-t:{c}",
      "b0-t-{c}",
      "b-c-d",
      "b-c-{d}-",
      "b-c-{0}",
      "b-c-{a}{a}",
      "b-{t}-c",
      "{b}-t-c"
    ].forEach(v => expect(isValidStringDynamic(v)).toBe(false));
  });

  test("isStyleStringKeyword", () => {
    [
      "initial",
      "inherit",
      "unset",
      "revert"
    ].forEach(v => expect(isValidStringKeyword(v)).toBe(true));

    [
      "notkeyword"
    ].forEach(v => expect(isValidStringKeyword(v)).toBe(false));

  });
});