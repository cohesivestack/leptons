import { initPackage, getPackage } from ".";
import { Atom } from "../atom";

describe("Padding", () => {

  test("should get atoms", () => {
    const pgk = initPackage({});

    let a = pgk.getAtom(["p", "t", "10px"]) as Atom;
    expect(a.cssClass).toBe("p-t-10px");
    expect(a.cssValue).toBe("padding-top: 10px;");
    expect(a.attribute).toBe("t");
    expect(a.value).toBe("10px");

    a = pgk.getAtom(["p", "b", "10"]) as Atom;
    expect(a.cssClass).toBe("p-b-10");
    expect(a.cssValue).toBe("padding-bottom: 10rem;");
    expect(a.attribute).toBe("b");
    expect(a.value).toBe("10");

    a = pgk.getAtom(["p", "l", "10_1px"]) as Atom;
    expect(a.cssClass).toBe("p-l-10_1px");
    expect(a.cssValue).toBe("padding-left: 10.1px;");
    expect(a.attribute).toBe("l");
    expect(a.value).toBe("10_1px");

    a = pgk.getAtom(["p", "r", "10_1"]) as Atom;
    expect(a.cssClass).toBe("p-r-10_1");
    expect(a.cssValue).toBe("padding-right: 10.1rem;");
    expect(a.attribute).toBe("r");
    expect(a.value).toBe("10_1");

    a = pgk.getAtom(["p", "v", "10px"]) as Atom;
    expect(a.cssClass).toBe("p-v-10px");
    expect(a.cssValue).toBe("padding-top: 10px; padding-bottom: 10px;");
    expect(a.attribute).toBe("v");
    expect(a.value).toBe("10px");

    a = pgk.getAtom(["p", "h", "10px"]) as Atom;
    expect(a.cssClass).toBe("p-h-10px");
    expect(a.cssValue).toBe("padding-left: 10px; padding-right: 10px;");
    expect(a.attribute).toBe("h");
    expect(a.value).toBe("10px");

    a = pgk.getAtom(["p", "10px"]) as Atom;
    expect(a.cssClass).toBe("p-10px");
    expect(a.cssValue).toBe("padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px;");
    expect(a.attribute).toBe(null);
    expect(a.value).toBe("10px");
  });

  test("should return null atoms", () => {
    const pgk = initPackage({});

    // Invalid value
    let a = pgk.getAtom(["p", "t", "px"]) as Atom;
    expect(a).toBeNull();
    a = pgk.getAtom(["p", "px"]) as Atom;
    expect(a).toBeNull();

    // Invalid attribute
    a = pgk.getAtom(["p", "a", "10px"]) as Atom;
    expect(a).toBeNull();

    // Missing parts
    a = pgk.getAtom(["p"]) as Atom;
    expect(a).toBeNull();
  })
});
