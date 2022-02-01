import { Module } from "../module";

const name: string = "Padding";
const symbol: string = "p";

const styles: { [key: string]: string } = {
  "{padding$length}":                                          "padding: {padding};",
  "{vertical$length}_{horizontal$length}":                     "padding: {vertical} {horizontal};",
  "{top$length}_{horizontal$length}_{bottom$length}":          "padding: {top} {horizontal} {bottom};",
  "{top$length}_{right$length}_{bottom$length}_{left$length}": "padding: {top} {right} {bottom} {left};",
  "{keyword}":                                                 "padding: {keyword};",

  "t-{padding$length}": "padding-top: {padding};",
  "t-{keyword}":        "padding-top: {keyword};",

  "r-{padding$length}": "padding-right: {padding};",
  "r-{keyword}":        "padding-right: {keyword};",

  "b-{padding$length}": "padding-bottom: {padding};",
  "b-{keyword}":        "padding-bottom: {keyword};",

  "l-{padding$length}": "padding-left: {padding};",
  "l-{keyword}":        "padding-left: {keyword};",

  "v-{padding$length}": "padding-top: {padding}; padding-bottom: {padding};",
  "v-{keyword}":        "padding-top: {keyword}; padding-bottom: {keyword};",

  "h-{padding$length}": "padding-left: {padding}; padding-right: {padding};",
  "h-{keyword}":        "padding-left: {keyword}; padding-right: {keyword};"
}

export const padding = new Module(name, symbol, styles);