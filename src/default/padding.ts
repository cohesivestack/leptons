import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

export class Padding extends Module {
  constructor(pkg: DefaultPackage) { super(pkg, "p"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `padding: ${this.convertUnitToCss(v)};`,
    t: (v: string) => `padding-top: ${this.convertUnitToCss(v)};`,
    r: (v: string) => `padding-right: ${this.convertUnitToCss(v)};`,
    b: (v: string) => `padding-bottom: ${this.convertUnitToCss(v)};`,
    l: (v: string) => `padding-left: ${this.convertUnitToCss(v)};`,
    v: (v: string) => `padding-top: ${this.convertUnitToCss(v)}; padding-bottom: ${this.convertUnitToCss(v)};`,
    h: (v: string) => `padding-left: ${this.convertUnitToCss(v)}; padding-right: ${this.convertUnitToCss(v)};`,
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