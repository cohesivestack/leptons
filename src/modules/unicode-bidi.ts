import { Module } from "../module";

const name: string = "Unicode Bidi";
const symbol: string = "ub";

const styles: { [key: string]: string } = {

  "normal":       "unicode-bidi: normal;",
  "e":            "unicode-bidi: embed;",
  "embed":        "unicode-bidi: embed;",
  "bo":           "unicode-bidi: bidi-override;",
  "bidiOverride": "unicode-bidi: bidi-override;",
  "{keyword}":    "unicode-bidi: {keyword};",

}

export const unicodeBidi = new Module(name, symbol, styles);
