import { Style } from "../style";
import { Module } from "../module";

const name: string = "Letter Spacing";
const symbol: string = "ls";

const styles: { [key: string]: Style } = {
  "normal":    "letter-spacing: normal;",
  "{length}":  "letter-spacing: {length};",
  "{keyword}": "letter-spacing: {keyword};",
}

export const letterSpacing = new Module(name, symbol, styles);