import { initPackage } from ".";
import { Atom } from "../atom";

describe("VerticalAlign", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["va", "b"]) as Atom;
    expect(a.cssClass).toBe("va-b");
    expect(a.cssValue).toBe("vertical-align: bottom;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("b");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["va", "10"]) as Atom;
    expect(a.cssClass).toBe("va-10");
    expect(a.cssValue).toBe("vertical-align: 10rem;");
    expect(a.attribute).toBe(undefined);
    expect(a.value).toBe("10");
    expect(a.breakpoint).toBe(undefined);
  });
});
