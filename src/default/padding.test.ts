import { initPackage } from ".";
import { Atom } from "../atom";

describe("Padding", () => {

  test("should get atoms", () => {
    const pgk = initPackage({breakpoints: { M: 64 }});

    let a = pgk.getAtom(["p", "t", "10px"]) as Atom;
    expect(a.cssClass).toBe("p-t-10px");
    expect(a.cssValue).toBe("padding-top: 10px;");
    expect(a.attribute).toBe("t");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["p", "b", "10"]) as Atom;
    expect(a.cssClass).toBe("p-b-10");
    expect(a.cssValue).toBe("padding-bottom: 10rem;");
    expect(a.attribute).toBe("b");
    expect(a.value).toBe("10");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["p", "l", "10_1px"]) as Atom;
    expect(a.cssClass).toBe("p-l-10_1px");
    expect(a.cssValue).toBe("padding-left: 10.1px;");
    expect(a.attribute).toBe("l");
    expect(a.value).toBe("10_1px");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["p", "r", "10_1"]) as Atom;
    expect(a.cssClass).toBe("p-r-10_1");
    expect(a.cssValue).toBe("padding-right: 10.1rem;");
    expect(a.attribute).toBe("r");
    expect(a.value).toBe("10_1");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["p", "v", "10px"]) as Atom;
    expect(a.cssClass).toBe("p-v-10px");
    expect(a.cssValue).toBe("padding-top: 10px; padding-bottom: 10px;");
    expect(a.attribute).toBe("v");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["p", "h", "10px", "M"]) as Atom;
    expect(a.cssClass).toBe("p-h-10px-M");
    expect(a.cssValue).toBe("padding-left: 10px; padding-right: 10px;");
    expect(a.attribute).toBe("h");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe("M");

    a = pgk.getAtom(["p", "10px", "M"]) as Atom;
    expect(a.cssClass).toBe("p-10px-M");
    expect(a.cssValue).toBe("padding: 10px;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe("M");
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage({breakpoints: { M: 64 }});

    // Invalid value
    expect(() => pgk.getAtom(["p", "t", "px"])).toThrowError("The value px is not valid");
    expect(() => pgk.getAtom(["p", "px"])).toThrowError("The value px is not valid");

    // Invalid attribute
    expect(pgk.getAtom(["p", "a", "10px"])).toBeUndefined();

    // Missing parts
    expect(pgk.getAtom(["p"])).toBeUndefined();

    // Invalid breakpoint
    expect(pgk.getAtom(["M"])).toBeUndefined();
    expect(pgk.getAtom(["p", "M"])).toBeUndefined();
    expect(() => pgk.getAtom(["p", "t", "10px", "m"])).toThrowError("The value m is not valid");
    expect(pgk.getAtom(["p", "10px", "m"])).toBeUndefined();
    expect(() => pgk.getAtom(["p", "t", "10px", "Z"])).toThrowError("The breakpoint Z used in the class p-t-10px-Z doesn't exists");
  });

});
