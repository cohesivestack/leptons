import { Module } from "../module";

const name: string = "Margin";
const symbol: string = "m";

const styles: { [key: string]: string } = {
  "a":   "margin: auto;",
  "{length}":   "margin: {length};",
  "{keyword}":  "margin: {keyword};",

  "t-a":         "margin-top: auto;",
  "t-{length}":  "margin-top: {length};",
  "t-{keyword}": "margin-top: {keyword};",

  "r-a":         "margin-right: auto;",
  "r-{length}":  "margin-right: {length};",
  "r-{keyword}": "margin-right: {keyword};",

  "b-a":         "margin-bottom: auto;",
  "b-{length}":  "margin-bottom: {length};",
  "b-{keyword}": "margin-bottom: {keyword};",

  "l-a":         "margin-left: auto;",
  "l-{length}":  "margin-left: {length};",
  "l-{keyword}": "margin-left: {keyword};",

  "v-a":         "margin-top: auto; margin-bottom: auto;",
  "v-{length}":  "margin-top: {length}; margin-bottom: {length};",
  "v-{keyword}": "margin-top: {keyword}; margin-bottom: {keyword};",

  "h-a":         "margin-left: auto; margin-right: auto;",
  "h-{length}":  "margin-left: {length}; margin-right: {length};",
  "h-{keyword}": "margin-left: {keyword}; margin-right: {keyword};"
}

export const margin = new Module(name, symbol, styles);