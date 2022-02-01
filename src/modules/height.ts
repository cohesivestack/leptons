import { Module } from "../module";

const name: string = "Height";
const symbol: string = "h";

const styles: { [key: string]: string } = {

  "auto":             "height: auto;",
  "{height$length}":  "height: {height};",
  "{keyword}":        "height: {keyword};",

}

export const height = new Module(name, symbol, styles);