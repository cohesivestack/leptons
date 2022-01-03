import { Style } from "../style";
import { Module } from "../module";

const name: string = "Hyphens";
const symbol: string = "hyphens";

const styles: { [key: string]: Style } = {
  "n":         "hyphens: none;",
  "none":      "hyphens: none;",
  "m":         "hyphens: manual;",
  "manual":    "hyphens: manual;",
  "a":         "hyphens: auto;",
  "auto":      "hyphens: auto;",
  "{keyword}": "hyphens: {keyword};",
}

export const hyphens = new Module(name, symbol, styles);