import { initPackage } from ".";
import { Atom } from "../atom";

describe("Margin", () => {

  test("should get atoms", () => {
    const pkg = initPackage({breakpoints: { M: 64 }});

    let a = pkg.getAtom(["m", "t", "10px"]) as Atom;
    expect(a.cssClass).toBe("m-t-10px");
    expect(a.cssValue).toBe("margin-top: 10px;");
    expect(a.attribute).toBe("t");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);

    a = pkg.getAtom(["m", "b", "10"]) as Atom;
    expect(a.cssClass).toBe("m-b-10");
    expect(a.cssValue).toBe("margin-bottom: 10rem;");
    expect(a.attribute).toBe("b");
    expect(a.value).toBe("10");
    expect(a.breakpoint).toBe(undefined);

    a = pkg.getAtom(["m", "l", "10_1px"]) as Atom;
    expect(a.cssClass).toBe("m-l-10_1px");
    expect(a.cssValue).toBe("margin-left: 10.1px;");
    expect(a.attribute).toBe("l");
    expect(a.value).toBe("10_1px");
    expect(a.breakpoint).toBe(undefined);

    a = pkg.getAtom(["m", "r", "10_1"]) as Atom;
    expect(a.cssClass).toBe("m-r-10_1");
    expect(a.cssValue).toBe("margin-right: 10.1rem;");
    expect(a.attribute).toBe("r");
    expect(a.value).toBe("10_1");
    expect(a.breakpoint).toBe(undefined);

    a = pkg.getAtom(["m", "r", "a"]) as Atom;
    expect(a.cssClass).toBe("m-r-a");
    expect(a.cssValue).toBe("margin-right: auto;");
    expect(a.attribute).toBe("r");
    expect(a.value).toBe("a");
    expect(a.breakpoint).toBe(undefined);

    a = pkg.getAtom(["m", "v", "10px"]) as Atom;
    expect(a.cssClass).toBe("m-v-10px");
    expect(a.cssValue).toBe("margin-top: 10px; margin-bottom: 10px;");
    expect(a.attribute).toBe("v");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);

    a = pkg.getAtom(["m", "h", "10px", "M"]) as Atom;
    expect(a.cssClass).toBe("m-h-10px-M");
    expect(a.cssValue).toBe("margin-left: 10px; margin-right: 10px;");
    expect(a.attribute).toBe("h");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe("M");

    a = pkg.getAtom(["m", "10px", "M"]) as Atom;
    expect(a.cssClass).toBe("m-10px-M");
    expect(a.cssValue).toBe("margin: 10px;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe("M");
  });


  test("should return undefined atoms", () => {
    const pkg = initPackage({breakpoints: { M: 64 }});

    // Invalid value
    expect(() => pkg.getAtom(["m", "t", "px"])).toThrowError("The value px is not valid");
    expect(() => pkg.getAtom(["m", "px"])).toThrowError("The value px is not valid");

    // Invalid attribute
    expect(pkg.getAtom(["m", "a", "10px"])).toBeUndefined();

    // Missing parts
    expect(pkg.getAtom(["m"])).toBeUndefined();

    // Invalid breakpoint
    expect(pkg.getAtom(["M"])).toBeUndefined();
    expect(pkg.getAtom(["m", "M"])).toBeUndefined();
    expect(() => pkg.getAtom(["m", "t", "10px", "m"])).toThrowError("The value m is not valid");
    expect(pkg.getAtom(["m", "10px", "m"])).toBeUndefined();
    expect(() => pkg.getAtom(["m", "t", "10px", "Z"])).toThrowError("The breakpoint Z used in the class m-t-10px-Z doesn't exists");

  });
});
