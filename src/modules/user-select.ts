import { Style } from "../style";
import { Module } from "../module";

const name: string = "User Select";
const symbol: string = "us";

const styles: { [key: string]: Style } = {

  //User Select
  "a":          "user-select: auto;",
  "auto":       "user-select: auto;",
  "n":          "user-select: none;",
  "none":       "user-select: none;",
  "t":          "user-select: text;",
  "text":       "user-select: text;",
  "all":        "user-select: all;",
  "{keyword}":  "user-select: {keyword};",

}

export const outline = new Module(name, symbol, styles);
