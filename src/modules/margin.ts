import { Style } from "../style";
import { Module } from "../module";

const name: string = "Margin";
const symbol: string = "m";

const styles: { [key: string]: Style } = {
  "{length}": "margin: {length};",
  "t-{length}": "margin-top: {length};",
  "r-{length}": "margin-right: {length};",
  "b-{length}": "margin-bottom: {length};",
  "l-{length}": "margin-bottom: {length};",
  "v-{length}": "margin-top: {length}; margin-bottom: {length};",
  "h-{length}": "margin-left: {length}; margin-right: {length};"
}

export const margin = new Module(name, symbol, styles);