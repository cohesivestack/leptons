import { initPackage } from ".";
import { Atom } from "../atom";

describe("Position", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["pos", "r"]) as Atom;
    expect(a.cssClass).toBe("pos-r");
    expect(a.cssValue).toBe("position: relative;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("r");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["pos", "r", "10px"]) as Atom;
    expect(a.cssClass).toBe("pos-r-10px");
    expect(a.cssValue).toBe("right: 10px;");
    expect(a.attribute).toBe("r");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);
  });

  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(pgk.getAtom(["pos", "x"])).toBeUndefined();
    expect(pgk.getAtom(["pos", "x", "10px"])).toBeUndefined();
  })
});