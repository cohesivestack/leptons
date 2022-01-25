import { Module } from "../module";

const name: string = "Caret Color";
const symbol: string = "cc";

const styles: { [key: string]: string } = {

  //Color
  "a":          "caret-color: auto;",
  "auto":       "caret-color: auto;",
  "{color}":    "caret-color: {color};",
  "{keyword}":  "caret-color: {keyword};",
}

export const caret = new Module(name, symbol, styles);
