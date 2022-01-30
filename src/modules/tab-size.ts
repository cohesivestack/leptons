import { Module } from "../module";

const name: string = "Tab Size";
const symbol: string = "ts";

const styles: { [key: string]: string } = {

  //Tab Size
  "{number$number}":    "tab-size: {number};",
  "{length$length}":    "tab-size: {length};",
  "{keyword}":          "tab-size: {keyword};",

}

export const tabSize = new Module(name, symbol, styles);
