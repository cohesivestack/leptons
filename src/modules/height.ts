import { Style } from "../style";
import { Module } from "../module";

const name: string = "Height";
const symbol: string = "h";

const styles: { [key: string]: Style } = {

  "auto":      "height: auto;",
  "{length}":  "height: {length};",
  "{keyword}": "height: {keyword};",

}

export const height = new Module(name, symbol, styles);