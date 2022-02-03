import { Module } from "../module";

const name: string = "Position";
const symbol: string = "pos";

const styles: { [key: string]: string } = {
  "a":         "position: absolute;",
  "absolute":  "position: absolute;",
  "f":         "position: fixed;",
  "fixed":     "position: fixed;",
  "re":        "position: relative;",
  "relative":  "position: relative;",
  "s":         "position: static;",
  "static":    "position: static;",
  "sticky":    "position: sticky;",
  "{keyword}": "position: {keyword};",

  "t-a":                "top: auto;",
  "t-auto":             "top: auto;",
  "t-{length$length}":  "top: {length};",
  "t-{keyword}":        "top: {keyword};",

  "b-a":                "bottom: auto;",
  "b-auto":             "bottom: auto;",
  "b-{length$length}":  "bottom: {length};",
  "b-{keyword}":        "bottom: {keyword};",

  "l-a":                "left: auto;",
  "l-auto":             "left: auto;",
  "l-{length$length}":  "left: {length};",
  "l-{keyword}":        "left: {keyword};",

  "r-a":                "right: auto;",
  "r-auto":             "right: auto;",
  "r-{length$length}":  "right: {length};",
  "r-{keyword}":        "right: {keyword};"

}

export const position = new Module(name, symbol, styles);