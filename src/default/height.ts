import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

export class Height extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "h"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `height: ${this.convertUnitToCss(v)};`,
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