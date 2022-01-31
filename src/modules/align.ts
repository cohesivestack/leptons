import { Module } from "../module";

const name: string = "Align";
const symbol: string = "a";

const styles: { [key: string]: string } = {

  // Align Items
  "i-n":         "align-items: normal;",
  "i-normal":    "align-items: normal;",
  "i-s":         "align-items: flex-start;",
  "i-start":     "align-items: flex-start;",
  "i-e":         "align-items: flex-end;",
  "i-end":       "align-items: flex-end;",
  "i-c":         "align-items: center;",
  "i-center":    "align-items: center;",
  "i-stretch":   "align-items: stretch;",
  "i-b":         "align-items: baseline;",
  "i-baseline":  "align-items: baseline;",
  "i-{keyword}": "align-items: {keyword};",

  // Align Self
  "s-a":         "align-self: auto;",
  "s-auto":      "align-self: auto;",
  "s-n":         "align-self: normal;",
  "s-normal":    "align-self: normal;",
  "s-s":         "align-self: flex-start;",
  "s-start":     "align-self: flex-start;",
  "s-e":         "align-self: flex-end;",
  "s-end":       "align-self: flex-end;",
  "s-c":         "align-self: center;",
  "s-center":    "align-self: center;",
  "s-stretch":   "align-self: stretch;",
  "s-b":         "align-self: baseline;",
  "s-baseline":  "align-self: baseline;",
  "s-{keyword}": "align-self: {keyword};",

  // Align Content
  "c-n":            "align-content: normal;",
  "c-normal":       "align-content: normal;",
  "c-s":            "align-content: flex-start;",
  "c-start":        "align-content: flex-start;",
  "c-e":            "align-content: flex-end;",
  "c-end":          "align-content: flex-end;",
  "c-c":            "align-content: center;",
  "c-center":       "align-content: center;",
  "c-stretch":      "align-content: stretch;",
  "c-sb":           "align-content: space-between;",
  "c-spaceBetween": "align-content: space-between;",
  "c-sa":           "align-content: space-around;",
  "c-spaceAround":  "align-content: space-around;",
  "c-se":           "align-content: space-evenly;",
  "c-spaceEvenly":  "align-content: space-evenly;",
  "c-{keyword}":    "align-content: {keyword};"
}

export const align = new Module(name, symbol, styles);