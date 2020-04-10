import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  c: "visibility: collapse;",
  h: "visibility: hidden;",
  v: "visibility: visible;"
}

export class Visibility extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "v"); }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {
    return this.buildAtom(
      1,
      classParts,
      cssClass,
      styles,
      breakpoint
    )
  }
}