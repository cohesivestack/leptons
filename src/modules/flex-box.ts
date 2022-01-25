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

  "b-a":         "flex-basis: auto;",
  "b-auto":      "flex-basis: auto;",
  "b-{length}":  "flex-basis: {length};",
  "b-{keyword}": "flex-basis: {keyword};",

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
  "g-{number}":  "flex-grow: {number};",
  "g-{keyword}": "flex-grow: {keyword};",

  // Shrink
  "s-{number}":  "flex-shrink: {number};",
  "s-{keyword}": "flex-shrink: {keyword};",

  // Wrap
  "w-w":         "flex-wrap: wrap;",
  "w-wrap":      "flex-wrap: wrap;",
  "w-nowrap":    "flex-wrap: nowrap;",
  "w-r":         "flex-wrap: wrap-reverse;",
  "w-reverse":   "flex-wrap: wrap-reverse;",
  "w-{keyword}": "flex-wrap: {keyword};",

  // Justify Content
  "jc-n":            "justify-content: normal;",
  "jc-normal":       "justify-content: normal;",
  "jc-s":            "justify-content: flex-start;",
  "jc-start":        "justify-content: flex-start;",
  "jc-e":            "justify-content: flex-end;",
  "jc-end":          "justify-content: flex-end;",
  "jc-c":            "justify-content: center;",
  "jc-center":       "justify-content: center;",
  "jc-stretch":      "justify-content: stretch;",
  "jc-sb":           "justify-content: space-between;",
  "jc-spaceBetween": "justify-content: space-between;",
  "jc-sa":           "justify-content: space-around;",
  "jc-spaceAround":  "justify-content: space-around;",
  "jc-se":           "justify-content: space-evenly;",
  "jc-spaceEvenly":  "justify-content: space-evenly;",
  "jc-{keyword}":    "justify-content: {keyword};",

  // Align Items
  "ai-n":         "align-items: normal;",
  "ai-normal":    "align-items: normal;",
  "ai-s":         "align-items: flex-start;",
  "ai-start":     "align-items: flex-start;",
  "ai-e":         "align-items: flex-end;",
  "ai-end":       "align-items: flex-end;",
  "ai-c":         "align-items: center;",
  "ai-center":    "align-items: center;",
  "ai-stretch":   "align-items: stretch;",
  "ai-b":         "align-items: baseline;",
  "ai-baseline":  "align-items: baseline;",
  "ai-{keyword}": "align-items: {keyword};",

  // Align Self
  "as-a":         "align-self: auto;",
  "as-auto":      "align-self: auto;",
  "as-n":         "align-self: normal;",
  "as-normal":    "align-self: normal;",
  "as-s":         "align-self: flex-start;",
  "as-start":     "align-self: flex-start;",
  "as-e":         "align-self: flex-end;",
  "as-end":       "align-self: flex-end;",
  "as-c":         "align-self: center;",
  "as-center":    "align-self: center;",
  "as-stretch":   "align-self: stretch;",
  "as-b":         "align-self: baseline;",
  "as-baseline":  "align-self: baseline;",
  "as-{keyword}": "align-self: {keyword};",

  // Align Content
  "ac-n":            "align-content: normal;",
  "ac-normal":       "align-content: normal;",
  "ac-s":            "align-content: flex-start;",
  "ac-start":        "align-content: flex-start;",
  "ac-e":            "align-content: flex-end;",
  "ac-end":          "align-content: flex-end;",
  "ac-c":            "align-content: center;",
  "ac-center":       "align-content: center;",
  "ac-stretch":      "align-content: stretch;",
  "ac-sb":           "align-content: space-between;",
  "ac-spaceBetween": "align-content: space-between;",
  "ac-sa":           "align-content: space-around;",
  "ac-spaceAround":  "align-content: space-around;",
  "ac-se":           "align-content: space-evenly;",
  "ac-spaceEvenly":  "align-content: space-evenly;",
  "ac-{keyword}":    "align-content: {keyword};"

}

export const flexBox = new Module(name, symbol, styles);