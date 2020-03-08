import { isUnitValid } from "./unit-type";

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