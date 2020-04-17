import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  baseline: "vertical-align: baseline;",
  s: "vertical-align: super;",
  super: "vertical-align: super;",
  sub: "vertical-align: sub;",
  t: "vertical-align: top;",
  top: "vertical-align: top;",
  tt: "vertical-align: text-top;",
  textTop: "vertical-align: text-top;",
  tb: "vertical-align: text-bottom;",
  textBottom: "vertical-align: text-bottom;",
  m: "vertical-align: middle;",
  middle: "vertical-align: middle;",
  b: "vertical-align: bottom;",
  bottom: "vertical-align: bottom;",
}

export class VerticalAlign extends Module {
  constructor(pkg: DefaultPackage) { super(pkg, "va"); }

  private readonly functions: any = {
    "no-attribute": (v: string) => `vertical-align: ${this.convertUnitToCss(v)};`,
  }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    let atom = this.buildAtom(
      1,
      classParts,
      cssClass,
      styles,
      breakpoint
    )

    if (!atom) {
      atom = this.buildAtomWithFunction(
        1,
        classParts,
        cssClass,
        this.functions,
        breakpoint
      );
    }

    return atom;
  }
}