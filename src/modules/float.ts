import { Module } from "../module";

const name: string = "Float";
const symbol: string = "float";

const styles: { [key: string]: string } = {
  "n":         "float: none;",
  "none":      "float: none;",
  "l":         "float: left;",
  "left":      "float: left;",
  "r":         "float: right;",
  "right":     "float: right;",
  "{keyword}": "float: {keyword};",
}

export const float = new Module(name, symbol, styles);