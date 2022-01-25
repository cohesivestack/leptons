import { Module } from "../module";

const name: string = "Table Layout";
const symbol: string = "tl";

const styles: { [key: string]: string } = {

  "a":         "table-layout: auto;",
  "auto":      "table-layout: auto;",
  "f":         "table-layout: fixed;",
  "fixed":     "table-layout: fixed;",
  "{length}":  "table-layout: {length};",
  "{keyword}": "table-layout: {keyword};",

}

export const tableLayout = new Module(name, symbol, styles);
