import { isUnitValid, convertUnitToCss, UnitType } from "./unit-type";

describe("Unit Type", () => {
  test("should validate unit type", () => {
    
    // Valid values
    expect(isUnitValid("1")).toBe(true);
    expect(isUnitValid("0")).toBe(true);
    expect(isUnitValid("10")).toBe(true);
    expect(isUnitValid("19")).toBe(true);
    expect(isUnitValid("190")).toBe(true);
    expect(isUnitValid("0_9")).toBe(true);
    expect(isUnitValid("0_09")).toBe(true);
    expect(isUnitValid("10_9")).toBe(true);
    expect(isUnitValid("10_901")).toBe(true);
    expect(isUnitValid("1p")).toBe(true);
    expect(isUnitValid("1pt")).toBe(true);
    expect(isUnitValid("1_9p")).toBe(true);
    expect(isUnitValid("10_90pt")).toBe(true);

    // Invalid values
    expect(isUnitValid("")).toBe(false);
    expect(isUnitValid(" ")).toBe(false);
    expect(isUnitValid("a")).toBe(false);
    expect(isUnitValid("px")).toBe(false);
    expect(isUnitValid("p10")).toBe(false);
    expect(isUnitValid("1y")).toBe(false);
    expect(isUnitValid("1_2y")).toBe(false);
    expect(isUnitValid("12_34y")).toBe(false);
  });
});

describe("Unit Type", () => {
  test("should convert unit value to css value", () => {

    expect(convertUnitToCss("1pt")).toBe("1pt");
    expect(convertUnitToCss("10pt")).toBe("10pt");
    expect(convertUnitToCss("10pt")).toBe("10pt");
    expect(convertUnitToCss("1_1pt")).toBe("1.1pt");
    expect(convertUnitToCss("10_19pt")).toBe("10.19pt");

    // Default values
    expect(convertUnitToCss("10")).toBe("10rem");
    expect(convertUnitToCss("10_19")).toBe("10.19rem");
    expect(convertUnitToCss("10", UnitType.Mm)).toBe("10mm");
    expect(convertUnitToCss("10_19", UnitType.Mm)).toBe("10.19mm");
    expect(convertUnitToCss("10mm", UnitType.Px)).toBe("10mm");
    expect(convertUnitToCss("10_19mm", UnitType.Px)).toBe("10.19mm");

  });
});