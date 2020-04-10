import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

function convertOpacityToCss(v: string) {
  if (!/^((1(_0)?)|(0(_[0-9]+)?))$/.test(v)) {
    throw new Error(`The opacity ${v} is not valid`);
  }
  let value = v.replace("_", ".");

  return value;
}

export class Opacity extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "o"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `opacity: ${convertOpacityToCss(v)};`,
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