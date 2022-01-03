import { Style } from "../style";
import { Module } from "../module";

const name: string = "Clear";
const symbol: string = "clear";

const styles: { [key: string]: Style } = {

  "n":         "clear: none;",
  "none":      "clear: none;",
  "l":         "clear: left;",
  "left":      "clear: left;",
  "r":         "clear: right;",
  "right":     "clear: right;",
  "b":         "clear: both;",
  "both":      "clear: both;",
  "{keyword}": "clear: {keyword};",
}

export const clear = new Module(name, symbol, styles);
