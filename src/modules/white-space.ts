import { Style } from "../style";
import { Module } from "../module";

const name: string = "White Space";
const symbol: string = "ws";

const styles: { [key: string]: Style } = {

  "n":         "white-space: nowrap;",
  "p":         "white-space: pre;",
  "pl":        "white-space: pre-line;",
  "pw":        "white-space: pre-wrap;",
  "{keyword}": "white-space: {keyword};"

}

export const whiteSpace = new Module(name, symbol, styles);