import { initPackage } from ".";
import { Atom } from "../atom";

describe("Height", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["h", "100px"]) as Atom;
    expect(a.cssClass).toBe("h-100px");
    expect(a.cssValue).toBe("height: 100px;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("100px");
    expect(a.breakpoint).toBe(undefined);
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(() => pgk.getAtom(["h", "px"])).toThrowError("The value px is not valid");

  });
});
