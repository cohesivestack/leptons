import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  // Style
  "style-n":       "font-style: normal;",
  "style-normal":  "font-style: normal;",
  "style-i":       "font-style: italic;",
  "style-italic":  "font-style: italic;",
  "style-o":       "font-style: oblique;",
  "style-oblique": "font-style: oblique;",

  // Size 
  "stretch-uc":             "font-stretch: ultra-condensed",
  "stretch-ultraCondensed": "font-stretch: ultra-condensed",
  "stretch-ec":             "font-stretch: extra-condensed",
  "stretch-extraCondensed": "font-stretch: extra-condensed",
  "stretch-c":              "font-stretch: condensed",
  "stretch-condensed":      "font-stretch: condensed",
  "stretch-n":              "font-stretch: normal",
  "stretch-normal":         "font-stretch: normal",
  "stretch-se":             "font-stretch: semi-expanded",
  "stretch-semiExpanded":   "font-stretch: semi-expanded",
  "stretch-e":              "font-stretch: expanded",
  "stretch-expanded":       "font-stretch: expanded",
  "stretch-ee":             "font-stretch: extra-expanded",
  "stretch-extraExpanded":  "font-stretch: extra-expanded",
  "stretch-ue":             "font-stretch: ultra-expanded",
  "stretch-ultraExpanded":  "font-stretch: ultra-expanded",

  // Variant
  "v-n":         "font-variant: normal;",
  "v-normal":    "font-variant: normal;",
  "v-sm":        "font-variant: small-caps;",
  "v-smallCaps": "font-variant: small-caps;",
}

export class Font extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "f"); }

  private readonly functions = {
    "f": (v: string) => `font-family: ${this.getFontFamily(v)};`,
    "s": (v: string) => `font-size: ${this.convertUnitToCss(v)};`,
    "w": (v: string) => `font-weight: ${this.convertUnitToCss(v)};`,
  };

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {
    let atom = this.buildAtom(
      2,
      classParts,
      cssClass,
      styles,
      breakpoint
    )

    if (!atom) {
      atom = this.buildAtomWithFunction(
        2,
        classParts,
        cssClass,
        this.functions,
        breakpoint
      );
    }

    return atom;
  }
}