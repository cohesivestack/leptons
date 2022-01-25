import { Module } from "../module";

const name: string = "Visibility";
const symbol: string = "v";

const styles: { [key: string]: string } = {

  "c":         "visibility: collapse;",
  "h":         "visibility: hidden;",
  "v":         "visibility: visible;",
  "{keyword}": "visibility: {keyword};"

}

export const visibility = new Module(name, symbol, styles);