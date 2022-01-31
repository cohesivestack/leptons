import { Module } from "../module";

const name: string = "Justify";
const symbol: string = "j";

const styles: { [key: string]: string } = {

  // Justify Content
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