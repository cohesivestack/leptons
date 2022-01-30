import { Module } from "../module";

const name: string = "Max";
const symbol: string = "max";

const styles: { [key: string]: string } = {

  //Width
  "w-n":                "max-width: none;",
  "w-none":             "max-width: none;",
  "w-{width$length}":   "max-width: {width};",
  "w-{keyword}":        "max-width: {keyword};",

  //Height
  "h-n":                "max-height: none;",
  "h-none":             "max-height: none;",
  "h-{height$length}":  "max-height: {height};",
  "h-{keyword}":        "max-height: {keyword};"

}

export const max = new Module(name, symbol, styles);