import { initPackage } from ".";
import { Atom } from "../atom";

describe("Margin", () => {

  test("should get atoms", () => {
    const pgk = initPackage({ M: 64 });

    let a = pgk.getAtom(["m", "t", "10px"]) as Atom;
    expect(a.cssClass).toBe("m-t-10px");
    expect(a.cssValue).toBe("margin-top: 10px;");
    expect(a.attribute).toBe("t");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["m", "b", "10"]) as Atom;
    expect(a.cssClass).toBe("m-b-10");
    expect(a.cssValue).toBe("margin-bottom: 10rem;");
    expect(a.attribute).toBe("b");
    expect(a.value).toBe("10");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["m", "l", "10_1px"]) as Atom;
    expect(a.cssClass).toBe("m-l-10_1px");
    expect(a.cssValue).toBe("margin-left: 10.1px;");
    expect(a.attribute).toBe("l");
    expect(a.value).toBe("10_1px");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["m", "r", "10_1"]) as Atom;
    expect(a.cssClass).toBe("m-r-10_1");
    expect(a.cssValue).toBe("margin-right: 10.1rem;");
    expect(a.attribute).toBe("r");
    expect(a.value).toBe("10_1");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["m", "v", "10px"]) as Atom;
    expect(a.cssClass).toBe("m-v-10px");
    expect(a.cssValue).toBe("margin-top: 10px; margin-bottom: 10px;");
    expect(a.attribute).toBe("v");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["m", "h", "10px", "M"]) as Atom;
    expect(a.cssClass).toBe("m-h-10px-M");
    expect(a.cssValue).toBe("margin-left: 10px; margin-right: 10px;");
    expect(a.attribute).toBe("h");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe("M");

    a = pgk.getAtom(["m", "10px", "M"]) as Atom;
    expect(a.cssClass).toBe("m-10px-M");
    expect(a.cssValue).toBe("margin-top: 10px; margin-bottom: 10px; margin-left: 10px; margin-right: 10px;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe("M");
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage({ M: 64 });

    // Invalid value
    expect(pgk.getAtom(["m", "t", "px"])).toBeUndefined();
    expect(pgk.getAtom(["m", "px"])).toBeUndefined();

    // Invalid attribute
    expect(pgk.getAtom(["m", "a", "10px"])).toBeUndefined();

    // Missing parts
    expect(pgk.getAtom(["m"])).toBeUndefined();

    // Invalid breakpoint
    expect(pgk.getAtom(["M"])).toBeUndefined();
    expect(pgk.getAtom(["m", "M"])).toBeUndefined();
    expect(pgk.getAtom(["m", "t", "10px", "m"])).toBeUndefined();
    expect(pgk.getAtom(["m", "10px", "m"])).toBeUndefined();
    expect(() => pgk.getAtom(["m", "t", "10px", "Z"])).toThrowError();

  })
});
