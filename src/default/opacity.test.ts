import { initPackage } from ".";
import { Atom } from "../atom";

describe("Opacity", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["o", "0_5"]) as Atom;
    expect(a.cssClass).toBe("o-0_5");
    expect(a.cssValue).toBe("opacity: 0.5;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("0_5");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["o", "1"]) as Atom;
    expect(a.cssClass).toBe("o-1");
    expect(a.cssValue).toBe("opacity: 1;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("1");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["o", "1_0"]) as Atom;
    expect(a.cssClass).toBe("o-1_0");
    expect(a.cssValue).toBe("opacity: 1.0;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("1_0");
    expect(a.breakpoint).toBe(undefined);
  });


  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(() => pgk.getAtom(["o", "2"])).toThrowError("The opacity 2 is not valid");
    expect(() => pgk.getAtom(["o", "0_"])).toThrowError("The opacity 0_ is not valid");
    expect(() => pgk.getAtom(["o", "1_1"])).toThrowError("The opacity 1_1 is not valid");

  });
});
