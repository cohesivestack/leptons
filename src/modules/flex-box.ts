import { Module } from "../module";

const name: string = "Flex Box";
const symbol: string = "fb";

const styles: { [key: string]: string } = {

  // Type
  "n":         "flex: none;",
  "none":      "flex: none;",
  "a":         "flex: 1 1 auto; min-width:0; min-height:0;",
  "auto":      "flex: 1 1 auto; min-width:0; min-height:0;",
  "{keyword}": "flex: {keyword};",

  // Basis
  "b-a":            "flex-basis: auto;",
  "b-auto":         "flex-basis: auto;",
  "b-c":            "flex-basis: content;",
  "b-content":      "flex-basis: content;",
  "b-{length}":     "flex-basis: {length};",
  "b-{keyword}":    "flex-basis: {keyword};",

  // Direction
  "d-r":             "flex-direction: row;",
  "d-row":           "flex-direction: row;",
  "d-c":             "flex-direction: column;",
  "d-column":        "flex-direction: column;",
  "d-rr":            "flex-direction: row-reverse;",
  "d-rowReverse":    "flex-direction: row-reverse;",
  "d-cr":            "flex-direction: column-reverse;",
  "d-columnReverse": "flex-direction: column-reverse;",
  "d-{keyword}":     "flex-direction: {keyword};",

  // Grow
  "g-{number$number}": "flex-grow: {number};",
  "g-{keyword}":       "flex-grow: {keyword};",

  // Shrink
  "s-{number$number}": "flex-shrink: {number};",
  "s-{keyword}":       "flex-shrink: {keyword};",

  // Wrap
  "w-w":         "flex-wrap: wrap;",
  "w-wrap":      "flex-wrap: wrap;",
  "w-nowrap":    "flex-wrap: nowrap;",
  "w-r":         "flex-wrap: wrap-reverse;",
  "w-reverse":   "flex-wrap: wrap-reverse;",
  "w-{keyword}": "flex-wrap: {keyword};",

}

export const flexBox = new Module(name, symbol, styles);