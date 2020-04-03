import { initPackage } from ".";
import { Atom } from "../atom";

describe("Text", () => {

  test("should get atoms", () => {
    const pgk = initPackage({colors: {green: "#FF0000"}});

    let a = pgk.getAtom(["t", "a", "l"]) as Atom;
    expect(a.cssClass).toBe("t-a-l");
    expect(a.cssValue).toBe("text-align: left;");
    expect(a.attribute).toBe("a");
    expect(a.value).toBe("l");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["t", "dc", "green"]) as Atom;
    expect(a.cssClass).toBe("t-dc-green");
    expect(a.cssValue).toBe("text-decoration-color: #FF0000;");
    expect(a.attribute).toBe("dc");
    expect(a.value).toBe("green");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["t", "i", "10px"]) as Atom;
    expect(a.cssClass).toBe("t-i-10px");
    expect(a.cssValue).toBe("text-indent: 10px;");
    expect(a.attribute).toBe("i");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);
  });
});