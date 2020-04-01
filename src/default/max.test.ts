import { initPackage } from ".";
import { Atom } from "../atom";

describe("Max", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["max", "w", "100px"]) as Atom;
    expect(a.cssClass).toBe("max-w-100px");
    expect(a.cssValue).toBe("max-width: 100px;");
    expect(a.attribute).toBe("w");
    expect(a.value).toBe("100px");
    expect(a.breakpoint).toBe(undefined);
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(() => pgk.getAtom(["max", "w", "px"])).toThrowError("The value px is not valid");

  });
});
