import { initPackage } from ".";
import { Atom } from "../atom";

describe("Cursor", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["c", "m"]) as Atom;
    expect(a.cssClass).toBe("c-m");
    expect(a.cssValue).toBe("cursor: move;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("m");
    expect(a.breakpoint).toBe(undefined);
  });
});