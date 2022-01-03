import { Style } from "../style";
import { Module } from "../module";

const name: string = "Writing Mode";
const symbol: string = "wm";

const styles: { [key: string]: Style } = {
  "ht":           "writing-mode: horizontal-tb;",
  "horizontalTb": "writing-mode: horizontal-tb;",
  "vr":           "writing-mode: vertical-rl;",
  "verticalTl":   "writing-mode: vertical-rl;",
  "vl":           "writing-mode: vertical-lr;",
  "verticalLr":   "writing-mode: vertical-lr;",
  "{keyword}":    "writing-mode: {keyword};",

}

export const writingMode = new Module(name, symbol, styles);
