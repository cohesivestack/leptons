import { Style } from "../style";
import { Module } from "../module";

const name: string = "Position";
const symbol: string = "pos";

const styles: { [key: string]: Style } = {
  "a":         "position: absolute;",
  "absolute":  "position: absolute;",
  "f":         "position: fixed;",
  "fixed":     "position: fixed;",
  "re":        "position: relative;",
  "relative":  "position: relative;",
  "s":         "position: static;",
  "static":    "position: static;",
  "{keyword}": "position: {keyword};",

  "t-{length}":  "top: {length};",
  "t-{keyword}": "top: {keyword};",

  "b-{length}":  "bottom: {length};",
  "b-{keyword}": "bottom: {keyword};",

  "l-{length}":  "left: {length};",
  "l-{keyword}": "left: {keyword};",

  "r-{length}":  "right: {length};",
  "r-{keyword}": "right: {keyword};"

}

export const position = new Module(name, symbol, styles);