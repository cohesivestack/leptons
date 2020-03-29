import { Module } from "../module";
import { Atom } from "../atom";
import { getPackage } from ".";
import { convertUnitToCss } from "../unit-type";

const functions: any = {
  "no-attribute": (v: string) => `padding: ${convertUnitToCss(v)};`,
  t: (v: string) => `padding-top: ${convertUnitToCss(v)};`,
  r: (v: string) => `padding-right: ${convertUnitToCss(v)};`,
  b: (v: string) => `padding-bottom: ${convertUnitToCss(v)};`,
  l: (v: string) => `padding-left: ${convertUnitToCss(v)};`,
  v: (v: string) => `padding-top: ${convertUnitToCss(v)}; padding-bottom: ${convertUnitToCss(v)};`,
  h: (v: string) => `padding-left: ${convertUnitToCss(v)}; padding-right: ${convertUnitToCss(v)};`,
} 

export class Padding extends Module {
  constructor() { super(getPackage(), "p"); }

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