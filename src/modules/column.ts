import { Style } from "../style";
import { Module } from "../module";

const name: string = "Columns";
const symbol: string = "col";

const styles: { [key: string]: Style } = {

  //Column Width
  "w-a":          "column-width: auto;",
  "w-auto":       "column-width: auto;",
  "w-{length}":   "column-width: {length};",
  "w-{keyword}":  "column-width: {keyword};",

  //Column Count
  "c-{number}":   "column-count: {number};",
  "c-a":          "column-count: auto;",
  "c-auto":       "column-count: auto;",
  "c-{keyword}":  "column-count: {keyword};",


  // Column Fill
  "f-b":         "column-fill: balance;",
  "f-balance":   "column-fill: balance;",
  "f-a":         "column-fill: auto;",
  "f-auto":      "column-fill: auto;",
  "f-{keyword}": "column-fill: {keyword};",

  // Column Gap
  "g-n":         "column-gap: normal;",
  "g-normal":    "column-gap: normal;",
  "g-{length}":  "column-gap: {length};",
  "g-{keyword}": "column-gap: {keyword};",

  // Column Rule Color
  "rc-{color}":   "column-rule-color: {color};",
  "rc-{keyword}": "column-rule-color: {keyword};",

  // Column Rule Style
  "rs-n":          "column-rule-style: none;",
  "rs-none":       "column-rule-style: none;",
  "rs-h":          "column-rule-style: hidden;",
  "rs-hidden":     "column-rule-style: hidden;",
  "rs-d":          "column-rule-style: dashed;",
  "rs-dashed":     "column-rule-style: dashed;",
  "rs-dotted":     "column-rule-style: dotted;",
  "rs-s":          "column-rule-style: solid;",
  "rs-solid":      "column-rule-style: solid;",
  "rs-double":     "column-rule-style: double;",
  "rs-g":          "column-rule-style: groove;",
  "rs-groove":     "column-rule-style: groove;",
  "rs-r":          "column-rule-style: ridge;",
  "rs-ridge":      "column-rule-style: ridge;",
  "rs-i":          "column-rule-style: inset;",
  "rs-inset":      "column-rule-style: inset;",
  "rs-o":          "column-rule-style: outset;",
  "rs-outset":     "column-rule-style: outset;",
  "rs-{keyword}":  "column-rule-style: {keyword};",

  // Column Rule Width
  "rw-m":         "column-rule-width: medium;",
  "rw-medium":    "column-rule-width: medium;",
  "rw-t":         "column-rule-width: thin;",
  "rw-thin":      "column-rule-width: thin;",
  "rw-thick":     "column-rule-width: thick;",
  "rw-{length}":  "column-rule-width: {length};",
  "rw-{keyword}": "column-rule-width: {keyword};",

  // Column Span
  "s-n":         "column-span: none;",
  "s-none":      "column-span: none;",
  "s-a":         "column-span: all;",
  "s-all":       "column-span: all;",
  "s-{keyword}": "column-span: {keyword};"
}

export const column = new Module(name, symbol, styles);
