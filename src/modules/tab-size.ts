import { Style } from "../style";
import { Module } from "../module";

const name: string = "Tab Size";
const symbol: string = "ts";

const styles: { [key: string]: Style } = {

  //Tab Size
  "{number}":   "tab-size: {number};",
  "{lenght}":   "tab-size: {lenght};",
  "{keyword}":  "tab-size: {keyword};",

}

export const outline = new Module(name, symbol, styles);
