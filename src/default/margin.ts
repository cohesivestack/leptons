import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

export class Margin extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "m"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `margin: ${this.convertUnitToCss(v)};`,
    t: (v: string) => `margin-top: ${this.convertUnitToCss(v)};`,
    r: (v: string) => `margin-right: ${this.convertUnitToCss(v)};`,
    b: (v: string) => `margin-bottom: ${this.convertUnitToCss(v)};`,
    l: (v: string) => `margin-left: ${this.convertUnitToCss(v)};`,
    v: (v: string) => `margin-top: ${this.convertUnitToCss(v)}; margin-bottom: ${this.convertUnitToCss(v)};`,
    h: (v: string) => `margin-left: ${this.convertUnitToCss(v)}; margin-right: ${this.convertUnitToCss(v)};`,
  }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    return this.buildAtomWithFunction(
      1,
      classParts,
      cssClass,
      this.functions,
      breakpoint
    );
  }
}