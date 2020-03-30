import { Module } from "../module";
import { Atom } from "../atom";
import { getPackage } from ".";
import { convertUnitToCss } from "../unit-type";

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

const functions: any = {
  t: (v: string) => `top: ${convertUnitToCss(v)};`,
  top: (v: string) => `top: ${convertUnitToCss(v)};`,
  b: (v: string) => `bottom: ${convertUnitToCss(v)};`,
  bottom: (v: string) => `bottom: ${convertUnitToCss(v)};`,
  l: (v: string) => `left: ${convertUnitToCss(v)};`,
  left: (v: string) => `left: ${convertUnitToCss(v)};`,
  r: (v: string) => `right: ${convertUnitToCss(v)};`,
  right: (v: string) => `right: ${convertUnitToCss(v)};`
}

export class Position extends Module {
  constructor() { super(getPackage(), "pos"); }

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
        functions,
        breakpoint
      );
    }

    return atom;
  }
}