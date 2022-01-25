import { Module } from "../module";

const name: string = "Outline";
const symbol: string = "ol";

const styles: { [key: string]: string } = {

  //Width
  "w-m":         "outline-width: medium;",
  "w-medium":    "outline-width: medium;",
  "w-t":         "outline-width: thin;",
  "w-thin":      "outline-width: thin;",
  "w-thick":     "outline-width: thick;",
  "w-{length}":  "outline-width: {length};",
  "w-{keyword}": "outline-width: {keyword};",

  //Style
  "s-n":         "outline-style: none;",
  "s-none":      "outline-style: none;",
  "s-h":         "outline-style: hidden;",
  "s-hidden":    "outline-style: hidden;",
  "s-d":         "outline-style: dotted;",
  "s-dotted":    "outline-style: dotted;",
  "s-dashed":    "outline-style: dashed;",
  "s-s":         "outline-style: solid;",
  "s-solid":     "outline-style: solid;",
  "s-double":    "outline-style: double;",
  "s-groove":    "outline-style: groove;",
  "s-ridge":     "outline-style: ridge;",
  "s-inset":     "outline-style: inset;",
  "s-outset":    "outline-style: outset;",
  "s-{keyword}": "outline-style: {keyword};",

  //Color
  "c-i":         "outline-color: invert;",
  "c-invert":    "outline-color: invert;",
  "c-{color}":   "outline-color: {color};",
  "c-{keyword}": "outline-color: {keyword};",

  // Offset
  "o-{length}":  "outline-offset: {length};",
  "o-{keyword}": "outline-offset: {keyword};",

}

export const outline = new Module(name, symbol, styles);
