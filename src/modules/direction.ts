import { Module } from "../module";

const name: string = "Direction";
const symbol: string = "dir";

const styles: { [key: string]: string } = {

  "l":         "direction: ltr;",
  "ltr":       "direction: ltr;",
  "r":         "direction: rtl;",
  "rtl":       "direction: rtl;",
  "{keyword}": "direction: {keyword};"

}

export const direction = new Module(name, symbol, styles);