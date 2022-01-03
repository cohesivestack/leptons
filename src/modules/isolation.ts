import { Style } from "../style";
import { Module } from "../module";

const name: string = "Isolation";
const symbol: string = "isolation";

const styles: { [key: string]: Style } = {

  "a":           "isolation: auto;",
  "auto":        "isolation: auto;",
  "i":           "isolation: isolate;",
  "isolate":     "isolation: isolate;",
  "{keyword}":   "isolation: {keyword};"
}

export const isolation = new Module(name, symbol, styles);