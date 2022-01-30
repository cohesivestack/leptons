import { Module } from "../module";

const name: string = "Min";
const symbol: string = "min";

const styles: { [key: string]: string } = {

  //Width
  "w-n":               "min-width: none;",
  "w-none":            "min-width: none;",
  "w-{width$length}":  "min-width: {width};",
  "w-{keyword}":       "min-width: {keyword};",

  //Height
  "h-n":                "min-height: none;",
  "h-none":             "min-height: none;",
  "h-{height$length}":  "min-height: {height};",
  "h-{keyword}":        "min-height: {keyword};"

}

export const min = new Module(name, symbol, styles);