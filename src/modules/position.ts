import { Style } from "../style";

export const symbol: string = "pos";

export const styles: { [key: string]: Style } = {
  "a": "position: absolute;",
  "absolute": "position: absolute;",
  "f": "position: fixed;",
  "fixed": "position: fixed;",
  "rl": "position: relative;",
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