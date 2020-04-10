import { initPackage } from ".";
import { Atom } from "../atom";

describe("Visibility", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["v", "h"]) as Atom;
    expect(a.cssClass).toBe("v-h");
    expect(a.cssValue).toBe("visibility: hidden;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("h");
    expect(a.breakpoint).toBe(undefined);
  });
});