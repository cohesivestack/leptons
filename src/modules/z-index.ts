import { Style } from "../style";
import { Module } from "../module";

const name: string = "Z-Index"
const symbol: string = "z";

const styles: { [key: string]: Style } = {
  "a":         "z-index: auto;",
  "auto":      "z-index: auto;",
  "{number}":  "z-index: {number};",
  "{keyword}": "z-index: {keyword};"
}

export const zIndex = new Module(name, symbol, styles);