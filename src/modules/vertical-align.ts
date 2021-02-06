import { Style } from "../style";
import { Module } from "../module";

const name: string = "Vertical Align";
const symbol: string = "va";

const styles: { [key: string]: Style } = {

  "baseline":   "vertical-align: baseline;",
  "s":          "vertical-align: super;",
  "super":      "vertical-align: super;",
  "sub":        "vertical-align: sub;",
  "t":          "vertical-align: top;",
  "top":        "vertical-align: top;",
  "tt":         "vertical-align: text-top;",
  "textTop":    "vertical-align: text-top;",
  "tb":         "vertical-align: text-bottom;",
  "textBottom": "vertical-align: text-bottom;",
  "m":          "vertical-align: middle;",
  "middle":     "vertical-align: middle;",
  "b":          "vertical-align: bottom;",
  "bottom":     "vertical-align: bottom;",
  "{length}":   "vertical-align: {length};",
  "{keyword}":  "vertical-align: {keyword};"
}

export const verticalAlign = new Module(name, symbol, styles);