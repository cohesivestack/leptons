import { Module } from "../module";

const name: string = "Margin";
const symbol: string = "m";

const styles: { [key: string]: string } = {
  "a":                                                         "margin: auto;",
  "{width$length}":                                            "margin: {width};",
  "{vertical$length}_{horizontal$length}":                     "margin: {vertical} {horizontal};",
  "{top$length}_{horizontal$length}_{bottom$length}":          "margin: {top} {horizontal} {bottom};",
  "{top$length}_{right$length}_{bottom$length}_{left$length}": "margin: {top} {right} {bottom} {left};",
  "{keyword}":                                                 "margin: {keyword};",

  "t-a":                "margin-top: auto;",
  "t-{width$length}":   "margin-top: {width};",
  "t-{keyword}":        "margin-top: {keyword};",

  "r-a":                "margin-right: auto;",
  "r-{width$length}":   "margin-top: {width};",
  "r-{keyword}":        "margin-right: {keyword};",

  "b-a":                "margin-bottom: auto;",
  "b-{width$length}":   "margin-top: {width};",
  "b-{keyword}":        "margin-bottom: {keyword};",

  "l-a":                "margin-left: auto;",
  "l-{width$length}":   "margin-top: {width};",
  "l-{keyword}":        "margin-left: {keyword};",

  "v-a":                "margin-top: auto; margin-bottom: auto;",
  "v-{width$length}":   "margin-top: {width}; margin-bottom: {width};",
  "v-{keyword}":        "margin-top: {keyword}; margin-bottom: {keyword};",

  "h-a":                "margin-left: auto; margin-right: auto;",
  "h-{width$length}":   "margin-left: {width}; margin-right: {width};",
  "h-{keyword}":        "margin-left: {keyword}; margin-right: {keyword};"
}

export const margin = new Module(name, symbol, styles);