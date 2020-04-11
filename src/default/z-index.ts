import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

function validateZIndex(v: string) {
  if (!/^\d+$/.test(v)) {
    throw new Error(`The z-index ${v} is not valid`);
  }

  return v;
}

export class ZIndex extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "z"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `z-index: ${validateZIndex(v)};`,
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