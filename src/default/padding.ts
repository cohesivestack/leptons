import { Module } from "../module";
import { Atom } from "../atom";
import { getPackage } from ".";
import { getAtomPartsForAxisCss, CommonCss } from "../module-helper";

const cssAttribute: string = "padding";

const attributes: any = {
  t: CommonCss.top,
  r: CommonCss.right,
  b: CommonCss.bottom,
  l: CommonCss.left,
  v: CommonCss.vertical,
  h: CommonCss.horizontal
} 

export class Padding implements Module {
  readonly symbol: string = "p";

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    return getAtomPartsForAxisCss(
      getPackage(),
      this,
      classParts,
      cssClass,
      attributes,
      cssAttribute,
      breakpoint);
  }
}