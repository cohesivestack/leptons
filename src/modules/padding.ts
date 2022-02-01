import { Module } from "../module";

const name: string = "Padding";
const symbol: string = "p";

const styles: { [key: string]: string } = {
  "{width$length}":                                            "padding: {width};",
  "{vertical$length}_{horizontal$length}":                     "padding: {vertical} {horizontal};",
  "{top$length}_{horizontal$length}_{bottom$length}":          "padding: {top} {horizontal} {bottom};",
  "{top$length}_{right$length}_{bottom$length}_{left$length}": "padding: {top} {right} {bottom} {left};",
  "{keyword}":                                                 "padding: {keyword};",

  "t-{width$length}": "padding-top: {width};",
  "t-{keyword}":      "padding-top: {keyword};",

  "r-{width$length}": "padding-right: {width};",
  "r-{keyword}":      "padding-right: {keyword};",

  "b-{width$length}": "padding-bottom: {width};",
  "b-{keyword}":      "padding-bottom: {keyword};",

  "l-{width$length}": "padding-left: {width};",
  "l-{keyword}":      "padding-left: {keyword};",

  "v-{width$length}": "padding-top: {width}; padding-bottom: {width};",
  "v-{keyword}":      "padding-top: {keyword}; padding-bottom: {keyword};",

  "h-{width$length}": "padding-left: {width}; padding-right: {width};",
  "h-{keyword}":      "padding-left: {keyword}; padding-right: {keyword};"
}

export const padding = new Module(name, symbol, styles);