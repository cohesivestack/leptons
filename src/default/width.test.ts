import { initPackage } from ".";
import { Atom } from "../atom";

describe("Width", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["w", "100px"]) as Atom;
    expect(a.cssClass).toBe("w-100px");
    expect(a.cssValue).toBe("width: 100px;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("100px");
    expect(a.breakpoint).toBe(undefined);
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(() => pgk.getAtom(["w", "px"])).toThrowError("The value px is not valid");

  });
});
