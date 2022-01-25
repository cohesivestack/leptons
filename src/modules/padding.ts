import { Module } from "../module";

const name: string = "Padding";
const symbol: string = "p";

const styles: { [key: string]: string } = {
  "{length}":   "padding: {length};",
  "{keyword}":  "padding: {keyword};",

  "t-{length}":  "padding-top: {length};",
  "t-{keyword}": "padding-top: {keyword};",

  "r-{length}":  "padding-right: {length};",
  "r-{keyword}": "padding-right: {keyword};",

  "b-{length}":  "padding-bottom: {length};",
  "b-{keyword}": "padding-bottom: {keyword};",

  "l-{length}":  "padding-left: {length};",
  "l-{keyword}": "padding-left: {keyword};",

  "v-{length}":  "padding-top: {length}; padding-bottom: {length};",
  "v-{keyword}": "padding-top: {keyword}; padding-bottom: {keyword};",

  "h-{length}":  "padding-left: {length}; padding-right: {length};",
  "h-{keyword}": "padding-left: {keyword}; padding-right: {keyword};"
}

export const padding = new Module(name, symbol, styles);