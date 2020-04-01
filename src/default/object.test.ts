import { initPackage } from ".";
import { Atom } from "../atom";

describe("Object", () => {

  test("should get atoms", () => {
    const pgk = initPackage();

    let a = pgk.getAtom(["obj", "p", "rt"]) as Atom;
    expect(a.cssClass).toBe("obj-p-rt");
    expect(a.cssValue).toBe("object-position: right top;");
    expect(a.attribute).toBe("p");
    expect(a.value).toBe("rt");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["obj", "p", "10pxX20px"]) as Atom;
    expect(a.cssClass).toBe("obj-p-10pxX20px");
    expect(a.cssValue).toBe("object-position: 10px 20px;");
    expect(a.attribute).toBe("p");
    expect(a.value).toBe("10pxX20px");
    expect(a.breakpoint).toBe(undefined);
  });
});