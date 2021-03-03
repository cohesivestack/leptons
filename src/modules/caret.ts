import { Style } from "../style";
import { Module } from "../module";

const name: string = "Caret Color";
const symbol: string = "cc";

const styles: { [key: string]: Style } = {

  //Color
  "a":          "caret-color: auto;",
  "auto":       "caret-color: auto;",
  "{color}":    "caret-color: {color}:",
  "{keyword}":  "caret-color: {keyword};",
}

export const outline = new Module(name, symbol, styles);
