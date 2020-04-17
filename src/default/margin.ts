import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

export class Margin extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "m"); }

  private convertMarginToCss(v: string) : string {
    return v === "auto" || v === "a" ? "auto" : this.convertUnitToCss(v);
  }

  private readonly functions: any = {
    "no-attribute": (v: string) => `margin: ${this.convertMarginToCss(v)};`,
    t: (v: string) => `margin-top: ${this.convertMarginToCss(v)};`,
    r: (v: string) => `margin-right: ${this.convertMarginToCss(v)};`,
    b: (v: string) => `margin-bottom: ${this.convertMarginToCss(v)};`,
    l: (v: string) => `margin-left: ${this.convertMarginToCss(v)};`,
    v: (v: string) => `margin-top: ${this.convertMarginToCss(v)}; margin-bottom: ${this.convertMarginToCss(v)};`,
    h: (v: string) => `margin-left: ${this.convertMarginToCss(v)}; margin-right: ${this.convertMarginToCss(v)};`,
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