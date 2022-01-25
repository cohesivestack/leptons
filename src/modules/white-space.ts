import { Module } from "../module";

const name: string = "White Space";
const symbol: string = "ws";

const styles: { [key: string]: string } = {

  "n":         "white-space: nowrap;",
  "nowrap":    "white-space: nowrap;",
  "normal":    "white-space: normal;",
  "p":         "white-space: pre;",
  "pre":       "white-space: pre;",
  "pl":        "white-space: pre-line;",
  "preLine":   "white-space: pre-line;",
  "pw":        "white-space: pre-wrap;",
  "preWrap":   "white-space: pre-wrap;",
  "{keyword}": "white-space: {keyword};"

}

export const whiteSpace = new Module(name, symbol, styles);