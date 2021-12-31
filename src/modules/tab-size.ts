import { Style } from "../style";
import { Module } from "../module";

const name: string = "Tab Size";
const symbol: string = "ts";

const styles: { [key: string]: Style } = {

  //Tab Size
  "{number}":   "tab-size: {number};",
  "{length}":   "tab-size: {length};",
  "{keyword}":  "tab-size: {keyword};",

}

export const tabSize = new Module(name, symbol, styles);
