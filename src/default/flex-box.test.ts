import { initPackage } from ".";
import { Atom } from "../atom";

describe("FlexBox", () => {

  test("should get atoms", () => {
    const pgk = initPackage({ M: 64 });

    let a = pgk.getAtom(["fb", "a"]) as Atom;
    expect(a.cssClass).toBe("fb-a");
    expect(a.cssValue).toBe("flex: 1 1 auto; min-width:0; min-height:0;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("a");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["fb", "auto"]) as Atom;
    expect(a.cssClass).toBe("fb-auto");
    expect(a.cssValue).toBe("flex: 1 1 auto; min-width:0; min-height:0;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("auto");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["fb", "d", "r"]) as Atom;
    expect(a.cssClass).toBe("fb-d-r");
    expect(a.cssValue).toBe("flex-direction: row;");
    expect(a.attribute).toBe("d");
    expect(a.value).toBe("r");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["fb", "d", "row"]) as Atom;
    expect(a.cssClass).toBe("fb-d-row");
    expect(a.cssValue).toBe("flex-direction: row;");
    expect(a.attribute).toBe("d");
    expect(a.value).toBe("row");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["fb", "d", "row", "M"]) as Atom;
    expect(a.cssClass).toBe("fb-d-row-M");
    expect(a.cssValue).toBe("flex-direction: row;");
    expect(a.attribute).toBe("d");
    expect(a.value).toBe("row");
    expect(a.breakpoint).toBe("M");

    a = pgk.getAtom(["fb", "a", "M"]) as Atom;
    expect(a.cssClass).toBe("fb-a-M");
    expect(a.cssValue).toBe("flex: 1 1 auto; min-width:0; min-height:0;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("a");
    expect(a.breakpoint).toBe("M");
  });

  test("should return undefined atoms", () => {
    const pgk = initPackage({ M: 64 });

    // Invalid value
    expect(pgk.getAtom(["fb", "d", "x"])).toBeUndefined();
    expect(pgk.getAtom(["fb", "x"])).toBeUndefined();

    // Invalid attribute
    expect(pgk.getAtom(["fb", "x", "r"])).toBeUndefined();

    // Missing parts
    expect(pgk.getAtom(["fb"])).toBeUndefined();

    // Invalid breakpoint
    expect(pgk.getAtom(["M"])).toBeUndefined();
    expect(pgk.getAtom(["fb", "M"])).toBeUndefined();
    expect(pgk.getAtom(["fb", "d", "r", "m"])).toBeUndefined();
    expect(pgk.getAtom(["fb", "a", "m"])).toBeUndefined();
    expect(() => pgk.getAtom(["fb", "d", "r", "Z"])).toThrowError();

  })
});