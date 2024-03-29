import { Module } from "../module";

const name: string = "Z-Index"
const symbol: string = "z";

const styles: { [key: string]: string } = {
  "a":                "z-index: auto;",
  "auto":             "z-index: auto;",
  "{number$number}":  "z-index: {number};",
  "{keyword}":        "z-index: {keyword};"
}

export const zIndex = new Module(name, symbol, styles);