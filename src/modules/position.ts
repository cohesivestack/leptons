import { Style } from "../style";
import { Module } from "../module";

const name: string = "Position";
const symbol: string = "pos";

const styles: { [key: string]: Style } = {
  "a": "position: absolute;",
  "absolute": "position: absolute;",
  "f": "position: fixed;",
  "fixed": "position: fixed;",
  "re": "position: relative;",
  "relative": "position: relative;",
  "s": "position: static;'",
  "static": "position: static;'",

  "t-{length}": "top: {length};",
  "top-{length}": "top: {length};",
  "b-{length}": "bottom: {length};",
  "bottom-{length}": "bottom: {length};",
  "l-{length}": "left: {length};",
  "left-{length}": "left: {length};",
  "r-{length}": "right: {length};",
  "right-{length}": "right: {length};"
}

export const position = new Module(name, symbol, styles);