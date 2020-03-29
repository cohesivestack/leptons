import { Module } from "../module";
import { Atom } from "../atom";
import { getPackage } from ".";
import { convertUnitToCss } from "../unit-type";

const functions: any = {
  "no-attribute": (v: string) => `margin: ${convertUnitToCss(v)};`,
  t: (v: string) => `margin-top: ${convertUnitToCss(v)};`,
  r: (v: string) => `margin-right: ${convertUnitToCss(v)};`,
  b: (v: string) => `margin-bottom: ${convertUnitToCss(v)};`,
  l: (v: string) => `margin-left: ${convertUnitToCss(v)};`,
  v: (v: string) => `margin-top: ${convertUnitToCss(v)}; margin-bottom: ${convertUnitToCss(v)};`,
  h: (v: string) => `margin-left: ${convertUnitToCss(v)}; margin-right: ${convertUnitToCss(v)};`,
} 

export class Margin extends Module {

  constructor() { super(getPackage(), "m"); }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    return this.buildAtomWithFunction(
      1,
      classParts,
      cssClass,
      functions,
      breakpoint
    );
  }
}