import { Module } from "../module";

const name: string = "Line Height";
const symbol: string = "lh";

const styles: { [key: string]: string } = {
  "normal":           "line-height: normal;",
  "{length$length}":  "line-height: {length};",
  "{keyword}":        "line-height: {keyword};",
}

export const lineHeight = new Module(name, symbol, styles);