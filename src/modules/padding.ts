import { Style } from "../style";
import { Module } from "../module";

const name: string = "Padding";
const symbol: string = "p";

const styles: { [key: string]: Style } = {
  "{length}": "padding: {length};",
  "t-{length}": "padding-top: {length};",
  "r-{length}": "padding-right: {length};",
  "b-{length}": "padding-bottom: {length};",
  "l-{length}": "padding-left: {length};",
  "v-{length}": "padding-top: {length}; padding-bottom: {length};",
  "h-{length}": "padding-left: {length}; padding-right: {length};"
}

export const padding = new Module(name, symbol, styles);