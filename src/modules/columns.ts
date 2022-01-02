import { Style } from "../style";
import { Module } from "../module";

const name: string = "Columns";
const symbol: string = "cl";

const styles: { [key: string]: Style } = {

  //Column Width
  "w-a":          "column-width: auto;",
  "w-auto":       "column-width: auto;",
  "w-{length}":   "column-width: {length};",
  "w-{keyword}":  "column-width: {keyword};",

  //Column Count
  "c-{number}":   "column-count: {number};",
  "c-a":          "column-count: auto;",
  "c-auto":       "column-count: auto;",
  "c-{keyword}":  "column-count: {keyword};",
}

export const columns = new Module(name, symbol, styles);
