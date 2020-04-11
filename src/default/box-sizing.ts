import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  c: "box-sizing: content-box;",
  b: "box-sizing: border-box;"
}

export class BoxSizing extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "bs"); }

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