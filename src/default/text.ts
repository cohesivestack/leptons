import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  // Align
  "a-l":       "text-align: left;",
  "a-left":    "text-align: left;",
  "a-c":       "text-align: center;",
  "a-center":  "text-align: center;",
  "a-r":       "text-align: right;",
  "a-right":   "text-align: right;",
  "a-j":       "text-align: jusitify;",
  "a-justify": "text-align: jusitify;",

  // Decoration Line
  "dl-u":            "text-decoration-line: underline;",
  "dl-underline":    "text-decoration-line: underline;",
  "dl-o":            "text-decoration-line: overline;",
  "dl-overline":     "text-decoration-line: overline;",
  "dl-lt":           "text-decoration-line: line-through;",
  "dl-line-through": "text-decoration-line: line-through;",
  "dl-n":            "text-decoration-line: none;",
  "dl-none":         "text-decoration-line: none;",

  // Decoration Style
  "ds-s":      "text-decoration-style: solid;",
  "ds-solid":  "text-decoration-style: solid;",
  "ds-d":      "text-decoration-style: dotted;",
  "ds-dotted": "text-decoration-style: dotted;",
  "ds-dashed": "text-decoration-style: dashed;",
  "ds-w":      "text-decoration-style: wavy;",

  // Justify
  "j-a":              "text-justify: auto;",
  "j-auto":           "text-justify: auto;",
  "j-iw":             "text-justify: inter-word;",
  "j-interWord":      "text-justify: inter-word;",
  "j-ic":             "text-justify: inter-character;",
  "j-interCharacter": "text-justify: inter-character;",
  "j-n":              "text-justify: none;",
  "j-none":           "text-justify: none;",

  // Overflow
  "o-c":        "text-overflow: clip;",
  "o-clip":     "text-overflow: clip;",
  "o-e":        "text-overflow: ellipsis;",
  "o-ellipsis": "text-overflow: ellipsis;",

  // Transform
  "t-u": "text-transform: uppercase;",
  "t-l": "text-transform: lowercase;",
  "t-c": "text-transform: capitalize;",
  "t-n": "text-transform: none;"
}

export class Text extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "t"); }

  private readonly functions = {
    "dc": (v: string) => `text-decoration-color: ${this.getColor(v)};`,
    "i": (v: string) => `text-indent: ${this.convertUnitToCss(v)};`,
    "c": (v: string) => `color: ${this.getColor(v)};`
    // TODO: Add text-shadow property
    // "s": (v: string) => `text-shadow: [h-shadow, v-shadow, blur-radius, color];`
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