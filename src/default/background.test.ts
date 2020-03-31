import { initPackage } from ".";
import { Atom } from "../atom";

describe("Background", () => {

  test("should get atoms", () => {
    const pgk = initPackage({}, {green: "#00FF00"}, undefined);

    let a = pgk.getAtom(["bg", "c", "green"]) as Atom;
    expect(a.cssClass).toBe("bg-c-green");
    expect(a.cssValue).toBe("background-color: #00FF00;");
    expect(a.attribute).toBe("c");
    expect(a.value).toBe("green");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["bg", "p", "10ptX20pt"]) as Atom;
    expect(a.cssClass).toBe("bg-p-10ptX20pt");
    expect(a.cssValue).toBe("background-position: 10pt 20pt;");
    expect(a.attribute).toBe("p");
    expect(a.value).toBe("10ptX20pt");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["bg", "p", "lt"]) as Atom;
    expect(a.cssClass).toBe("bg-p-lt");
    expect(a.cssValue).toBe("background-position: left top;");
    expect(a.attribute).toBe("p");
    expect(a.value).toBe("lt");
    expect(a.breakpoint).toBe(undefined);
  });
});