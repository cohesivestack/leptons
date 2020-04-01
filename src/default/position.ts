import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  a: "position: absolute;",
  absolute: "position: absolute;",
  f: "position: fixed;",
  fixed: "position: fixed;",
  r: "position: relative;",
  relative: "position: relative;",
  s: "position: static;'",
  static: "position: static;'",
}

export class Position extends Module {
  constructor(pkg: DefaultPackage) { super(pkg, "pos"); }

  private readonly functions: any = {
    t: (v: string) => `top: ${this.convertUnitToCss(v)};`,
    top: (v: string) => `top: ${this.convertUnitToCss(v)};`,
    b: (v: string) => `bottom: ${this.convertUnitToCss(v)};`,
    bottom: (v: string) => `bottom: ${this.convertUnitToCss(v)};`,
    l: (v: string) => `left: ${this.convertUnitToCss(v)};`,
    left: (v: string) => `left: ${this.convertUnitToCss(v)};`,
    r: (v: string) => `right: ${this.convertUnitToCss(v)};`,
    right: (v: string) => `right: ${this.convertUnitToCss(v)};`
  }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    let atom = this.buildAtom(
      1,
      classParts,
      cssClass,
      styles,
      breakpoint
    )

    if (!atom) {
      atom = this.buildAtomWithFunction(
        2,
        classParts,
        cssClass,
        this.functions,
        breakpoint
      );
    }

    return atom;
  }
}