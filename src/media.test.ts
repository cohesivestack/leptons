import { initPackage } from "./default";
import { Media } from "./media";
import { Atom } from "./atom";
import { AssertionError } from "assert";

describe("Media", () => {

  test("should build with some breakpoint", () => {

    const pkg = initPackage({ M: 25 });

    const media = new Media(pkg, "M");
    media.addAtom(pkg.getAtom(["p", "v", "10px", "M"]) as Atom);
    const cssString = media.build();

    expect(cssString.trim()).toBe(`
@media screen and (min-width: 25rem) {
  .p-v-10px-M { padding-top: 10px; padding-bottom: 10px; }
}`.trim());

  });

  test("should build without breakpoint", () => {

    const pkg = initPackage({ M: 25 });

    const media = new Media(pkg);
    media.addAtom(pkg.getAtom(["p", "v", "10px"]) as Atom);
    const cssString = media.build();

    expect(cssString.trim()).toBe(`
.p-v-10px { padding-top: 10px; padding-bottom: 10px; }`.trim());
  });

  test("should validate breakpoints correctly", () => {
    
    const pkg = initPackage({ M: 10, L: 20 });

    let media = new Media(pkg);
    expect(() => media.addAtom(pkg.getAtom(["p", "v", "10px", "M"]) as Atom))
      .toThrowError('The "p-v-10px-M" atom belongs to "M" breakpoint, but this is being added to "default"');

    media = new Media(pkg, "M");
    expect(() => media.addAtom(pkg.getAtom(["p", "v", "10px", "L"]) as Atom))
      .toThrowError(`The "p-v-10px-L" atom belongs to "L" breakpoint, but this is being added to "M" breakpoint`);

    media = new Media(pkg, "M");
    expect(() => media.addAtom(pkg.getAtom(["p", "v", "10px"]) as Atom))
      .toThrowError(`The "p-v-10px" atom doesn't belong to any breakpoint, but this is being added to "M" breakpoint`);
  });
});