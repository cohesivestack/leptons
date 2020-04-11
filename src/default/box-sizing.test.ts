import { initPackage } from ".";
import { Atom } from "../atom";

describe("BoxSizing", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["bs", "c"]) as Atom;
    expect(a.cssClass).toBe("bs-c");
    expect(a.cssValue).toBe("box-sizing: content-box;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("c");
    expect(a.breakpoint).toBe(undefined);
  });
});