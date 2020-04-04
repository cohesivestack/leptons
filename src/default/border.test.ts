import { initPackage } from ".";
import { Atom } from "../atom";

describe("Border", () => {

  test("should get atoms", () => {
    const pgk = initPackage({colors: {green: "#FF0000"}});

    let a = pgk.getAtom(["b", "sl", "d"]) as Atom;
    expect(a.cssClass).toBe("b-sl-d");
    expect(a.cssValue).toBe("border-left-style: dotted;");
    expect(a.attribute).toBe("sl");
    expect(a.value).toBe("d");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["b", "ct", "green"]) as Atom;
    expect(a.cssClass).toBe("b-ct-green");
    expect(a.cssValue).toBe("border-top-color: #FF0000;");
    expect(a.attribute).toBe("ct");
    expect(a.value).toBe("green");
    expect(a.breakpoint).toBe(undefined);

    a = pgk.getAtom(["b", "wb", "10px"]) as Atom;
    expect(a.cssClass).toBe("b-wb-10px");
    expect(a.cssValue).toBe("border-bottom-width: 10px;");
    expect(a.attribute).toBe("wb");
    expect(a.value).toBe("10px");
    expect(a.breakpoint).toBe(undefined);
  });
});