import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

export class Width extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "w"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `width: ${this.convertUnitToCss(v)};`,
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