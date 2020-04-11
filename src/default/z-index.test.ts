import { initPackage } from ".";
import { Atom } from "../atom";

describe("ZIndex", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["z", "0"]) as Atom;
    expect(a.cssClass).toBe("z-0");
    expect(a.cssValue).toBe("z-index: 0;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("0");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["z", "10"]) as Atom;
    expect(a.cssClass).toBe("z-10");
    expect(a.cssValue).toBe("z-index: 10;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("10");
    expect(a.breakpoint).toBe(undefined);
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(() => pgk.getAtom(["z", "_1"])).toThrowError("The z-index _1 is not valid");
    expect(() => pgk.getAtom(["z", "a"])).toThrowError("The z-index a is not valid");

  });
});
