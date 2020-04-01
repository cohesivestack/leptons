import { initPackage } from ".";
import { Atom } from "../atom";

describe("Font", () => {

  test("should get atoms", () => {
    const pgk = initPackage({fonts: {roboto: "Roboto, Arial"}});

    let a = pgk.getAtom(["f", "f", "roboto"]) as Atom;
    expect(a.cssClass).toBe("f-f-roboto");
    expect(a.cssValue).toBe("font-family: Roboto, Arial;");
    expect(a.attribute).toBe("f");
    expect(a.value).toBe("roboto");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["f", "s", "3"]) as Atom;
    expect(a.cssClass).toBe("f-s-3");
    expect(a.cssValue).toBe("font-size: 3rem;");
    expect(a.attribute).toBe("s");
    expect(a.value).toBe("3");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["f", "style", "i"]) as Atom;
    expect(a.cssClass).toBe("f-style-i");
    expect(a.cssValue).toBe("font-style: italic;");
    expect(a.attribute).toBe("style");
    expect(a.value).toBe("i");
    expect(a.breakpoint).toBe(undefined);
  });

  test("should return undefined atoms", () => {
    const pgk = initPackage({fonts: {robot: "Roboto, Arial"}});

    // Invalid value
    expect(() => pgk.getAtom(["f", "f", "arial"])).toThrowError("The font family arial is not valid");
    expect(() => pgk.getAtom(["f", "s", "xx"])).toThrowError("The value xx is not valid");
  })
});