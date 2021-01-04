import { Style } from "../style";
import { Module } from "../module";

const name: string = "Margin";
const symbol: string = "m";

const styles: { [key: string]: Style } = {
  "{length}": "margin: {length};",
  "t-{length}": "margin-top: {length};",
  "r-{length}": "margin-right: {length};",
  "b-{length}": "margin-bottom: {length};",
  "l-{length}": "margin-left: {length};",
  "v-{length}": "margin-top: {length}; margin-bottom: {length};",
  "h-{length}": "margin-left: {length}; margin-right: {length};",
  "a": "margin: auto;",
  "t-a": "margin-top: auto;",
  "r-a": "margin-right: auto;",
  "b-a": "margin-bottom: auto;",
  "l-a": "margin-left: auto;",
  "v-a": "margin-top: auto; margin-bottom: auto;",
  "h-a": "margin-left: auto; margin-right: auto;"
}

export const margin = new Module(name, symbol, styles);