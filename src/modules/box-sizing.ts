import { Module } from "../module";

const name: string = "Box Sizing";
const symbol: string = "bs";

const styles: { [key: string]: string } = {

  // Box Sizing
  "c":         "box-sizing: content-box;",
  "b":         "box-sizing: border-box;",
  "{keyword}": "box-sizing: {keyword};"

}

export const boxSizing = new Module(name, symbol, styles);