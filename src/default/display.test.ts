import { initPackage } from ".";
import { Atom } from "../atom";

describe("Display", () => {

  test("should get atoms", () => {
    const pgk = initPackage({});

    let a = pgk.getAtom(["d", "it"]) as Atom;
    expect(a.cssClass).toBe("d-it");
    expect(a.cssValue).toBe("display: inline-table;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("it");
    expect(a.breakpoint).toBe(undefined);
  });

  test("should return undefined atoms", () => {
    const pgk = initPackage();

    // Invalid value
    expect(pgk.getAtom(["d", "x"])).toBeUndefined();
  })
});