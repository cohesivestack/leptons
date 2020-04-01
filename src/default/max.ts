import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

export class Max extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "max"); }

  private readonly functions: any = {
    "w": (v: string) => `max-width: ${this.convertUnitToCss(v)};`,
    "h": (v: string) => `max-height: ${this.convertUnitToCss(v)};`,
  } 

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    return this.buildAtomWithFunction(
      2,
      classParts,
      cssClass,
      this.functions,
      breakpoint
    );
  }
}