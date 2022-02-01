import { Module } from "../module";

const name: string = "Box";
const symbol: string = "box";

const styles: { [key: string]: string } = {

  // Shadow
  "s-n":         "box-shadow: none;",
  "s-none":      "box-shadow: none;",
  "s-{shadow}":  "box-shadow: {shadow};",
  "s-{keyword}": "box-shadow: {keyword};",

  // Sizing
  "sizing-c":         "box-sizing: content-box;",
  "sizing-b":         "box-sizing: border-box;",
  "sizing-{keyword}": "box-sizing: {keyword};"
}

export const box = new Module(name, symbol, styles);