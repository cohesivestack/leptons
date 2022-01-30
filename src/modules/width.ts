import { Module } from "../module";

const name: string = "Width";
const symbol: string = "w";

const styles: { [key: string]: string } = {

  "a":                "width: auto;",
  "auto":             "width: auto;",
  "{width$length}":   "width: {width};",
  "{keyword}":        "width: {keyword};"

}

export const width = new Module(name, symbol, styles);