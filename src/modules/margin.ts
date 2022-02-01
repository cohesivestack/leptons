import { Module } from "../module";

const name: string = "Margin";
const symbol: string = "m";

const styles: { [key: string]: string } = {
  "a":                                                         "margin: auto;",
  "{margin$length}":                                           "margin: {margin};",
  "{vertical$length}_{horizontal$length}":                     "margin: {vertical} {horizontal};",
  "{top$length}_{horizontal$length}_{bottom$length}":          "margin: {top} {horizontal} {bottom};",
  "{top$length}_{right$length}_{bottom$length}_{left$length}": "margin: {top} {right} {bottom} {left};",
  "{keyword}":                                                 "margin: {keyword};",

  "t-a":                "margin-top: auto;",
  "t-{margin$length}":  "margin-top: {margin};",
  "t-{keyword}":        "margin-top: {keyword};",

  "r-a":                "margin-right: auto;",
  "r-{margin$length}":  "margin-right: {margin};",
  "r-{keyword}":        "margin-right: {keyword};",

  "b-a":                "margin-bottom: auto;",
  "b-{margin$length}":  "margin-bottom: {margin};",
  "b-{keyword}":        "margin-bottom: {keyword};",

  "l-a":                "margin-left: auto;",
  "l-{margin$length}":  "margin-left: {margin};",
  "l-{keyword}":        "margin-left: {keyword};",

  "v-a":                "margin-top: auto; margin-bottom: auto;",
  "v-{margin$length}":  "margin-top: {margin}; margin-bottom: {margin};",
  "v-{keyword}":        "margin-top: {keyword}; margin-bottom: {keyword};",

  "h-a":                "margin-left: auto; margin-right: auto;",
  "h-{margin$length}":  "margin-left: {margin}; margin-right: {margin};",
  "h-{keyword}":        "margin-left: {keyword}; margin-right: {keyword};"
}

export const margin = new Module(name, symbol, styles);