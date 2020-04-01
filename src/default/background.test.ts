import { initPackage } from ".";
import { Atom } from "../atom";

describe("Background", () => {

  test("should get atoms", () => {
    const pgk = initPackage({colors: {green: "#00FF00"}});

    let a = pgk.getAtom(["bg", "c", "green"]) as Atom;
    expect(a.cssClass).toBe("bg-c-green");
    expect(a.cssValue).toBe("background-color: #00FF00;");
    expect(a.attribute).toBe("c");
    expect(a.value).toBe("green");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["bg", "p", "10ptX20pt"]) as Atom;
    expect(a.cssClass).toBe("bg-p-10ptX20pt");
    expect(a.cssValue).toBe("background-position: 10pt 20pt;");
    expect(a.attribute).toBe("p");
    expect(a.value).toBe("10ptX20pt");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["bg", "p", "lt"]) as Atom;
    expect(a.cssClass).toBe("bg-p-lt");
    expect(a.cssValue).toBe("background-position: left top;");
    expect(a.attribute).toBe("p");
    expect(a.value).toBe("lt");
    expect(a.breakpoint).toBe(undefined);
  });

  test("should return undefined atoms", () => {
    const pgk = initPackage({colors: {green: "#00FF00"}});

    // Invalid value
    expect(() => pgk.getAtom(["bg", "c", "blue"])).toThrowError("The color blue is not valid");
    expect(() => pgk.getAtom(["bg", "p", "1px"])).toThrowError("The quantities of values in 1px is not valid");
  })
});