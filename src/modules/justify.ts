import { Module } from "../module";

const name: string = "Justify";
const symbol: string = "j";

const styles: { [key: string]: string } = {

  // Items
  "i-n":         "justify-items: normal;",
  "i-normal":    "justify-items: normal;",
  "i-s":         "justify-items: flex-start;",
  "i-start":     "justify-items: flex-start;",
  "i-e":         "justify-items: flex-end;",
  "i-end":       "justify-items: flex-end;",
  "i-c":         "justify-items: center;",
  "i-center":    "justify-items: center;",
  "i-stretch":   "justify-items: stretch;",
  "i-b":         "justify-items: baseline;",
  "i-baseline":  "justify-items: baseline;",
  "i-{keyword}": "justify-items: {keyword};",

  // Self
  "s-a":         "justify-self: auto;",
  "s-auto":      "justify-self: auto;",
  "s-n":         "justify-self: normal;",
  "s-normal":    "justify-self: normal;",
  "s-s":         "justify-self: flex-start;",
  "s-start":     "justify-self: flex-start;",
  "s-e":         "justify-self: flex-end;",
  "s-end":       "justify-self: flex-end;",
  "s-c":         "justify-self: center;",
  "s-center":    "justify-self: center;",
  "s-stretch":   "justify-self: stretch;",
  "s-b":         "justify-self: baseline;",
  "s-baseline":  "justify-self: baseline;",
  "s-{keyword}": "justify-self: {keyword};",

  // Content
  "c-n":            "justify-content: normal;",
  "c-normal":       "justify-content: normal;",
  "c-s":            "justify-content: flex-start;",
  "c-start":        "justify-content: flex-start;",
  "c-e":            "justify-content: flex-end;",
  "c-end":          "justify-content: flex-end;",
  "c-c":            "justify-content: center;",
  "c-center":       "justify-content: center;",
  "c-stretch":      "justify-content: stretch;",
  "c-sb":           "justify-content: space-between;",
  "c-spaceBetween": "justify-content: space-between;",
  "c-sa":           "justify-content: space-around;",
  "c-spaceAround":  "justify-content: space-around;",
  "c-se":           "justify-content: space-evenly;",
  "c-spaceEvenly":  "justify-content: space-evenly;",
  "c-{keyword}":    "justify-content: {keyword};"

}

export const justify = new Module(name, symbol, styles);