import { Style } from "../style";
import { Module } from "../module";

const name: string = "Border";
const symbol: string = "b";

const styles: { [key: string]: Style } = {

  // Color
  "c-{color}":   `border-color: {color};`,
  "ct-{color}":  `border-top-color: {color};`,
  "cb-{color}":  `border-bottom-color: {color};`,
  "cl-{color}":  `border-left-color: {color};`,
  "cr-{color}":  `border-right-color: {color};`,

  // Radius
  "r-{length}":   `border-radius: {length};`,
  "rtl-{length}": `border-top-left-radius: {length};`,
  "rtr-{length}": `border-rop-right-radius: {length};`,
  "rbl-{length}": `border-bottom-left-radius: {length};`,
  "rbr-{length}": `border-bottom-right-radius: {length};`,

  // Style
  "s-n":      "border-style: none;",
  "s-none":   "border-style: none;",
  "s-h":      "border-style: hidden;",
  "s-hidden": "border-style: hidden;",
  "s-d":      "border-style: dotted;",
  "s-dotted": "border-style: dotted;",
  "s-dashed": "border-style: dashed;",
  "s-s":      "border-style: solid;",
  "s-solid":  "border-style: solid;",
  "s-double": "border-style: double;",
  "s-g":      "border-style: groove;",
  "s-groove": "border-style: groove;",
  "s-r":      "border-style: ridge;",
  "s-ridge":  "border-style: ridge;",
  "s-i":      "border-style: inset;",
  "s-inset":  "border-style: inset;",
  "s-o":      "border-style: outset;",
  "s-outset": "border-style: outset;",

  // Style Top
  "st-n":      "border-top-style: none;",
  "st-none":   "border-top-style: none;",
  "st-h":      "border-top-style: hidden;",
  "st-hidden": "border-top-style: hidden;",
  "st-d":      "border-top-style: dotted;",
  "st-dotted": "border-top-style: dotted;",
  "st-dashed": "border-top-style: dashed;",
  "st-s":      "border-top-style: solid;",
  "st-solid":  "border-top-style: solid;",
  "st-double": "border-top-style: double;",
  "st-g":      "border-top-style: groove;",
  "st-groove": "border-top-style: groove;",
  "st-r":      "border-top-style: ridge;",
  "st-ridge":  "border-top-style: ridge;",
  "st-i":      "border-top-style: inset;",
  "st-inset":  "border-top-style: inset;",
  "st-o":      "border-top-style: outset;",
  "st-outset": "border-top-style: outset;",

  // Style Bottom
  "sb-n":      "border-bottom-style: none;",
  "sb-none":   "border-bottom-style: none;",
  "sb-h":      "border-bottom-style: hidden;",
  "sb-hidden": "border-bottom-style: hidden;",
  "sb-d":      "border-bottom-style: dotted;",
  "sb-dotted": "border-bottom-style: dotted;",
  "sb-dashed": "border-bottom-style: dashed;",
  "sb-s":      "border-bottom-style: solid;",
  "sb-solid":  "border-bottom-style: solid;",
  "sb-double": "border-bottom-style: double;",
  "sb-g":      "border-bottom-style: groove;",
  "sb-groove": "border-bottom-style: groove;",
  "sb-r":      "border-bottom-style: ridge;",
  "sb-ridge":  "border-bottom-style: ridge;",
  "sb-i":      "border-bottom-style: inset;",
  "sb-inset":  "border-bottom-style: inset;",
  "sb-o":      "border-bottom-style: outset;",
  "sb-outset": "border-bottom-style: outset;",

  // Style Left
  "sl-n":      "border-left-style: none;",
  "sl-none":   "border-left-style: none;",
  "sl-h":      "border-left-style: hidden;",
  "sl-hidden": "border-left-style: hidden;",
  "sl-d":      "border-left-style: dotted;",
  "sl-dotted": "border-left-style: dotted;",
  "sl-dashed": "border-left-style: dashed;",
  "sl-s":      "border-left-style: solid;",
  "sl-solid":  "border-left-style: solid;",
  "sl-double": "border-left-style: double;",
  "sl-g":      "border-left-style: groove;",
  "sl-groove": "border-left-style: groove;",
  "sl-r":      "border-left-style: ridge;",
  "sl-ridge":  "border-left-style: ridge;",
  "sl-i":      "border-left-style: inset;",
  "sl-inset":  "border-left-style: inset;",
  "sl-o":      "border-left-style: outset;",
  "sl-outset": "border-left-style: outset;",

  // Style Right
  "sr-n":      "border-right-style: none;",
  "sr-none":   "border-right-style: none;",
  "sr-h":      "border-right-style: hidden;",
  "sr-hidden": "border-right-style: hidden;",
  "sr-d":      "border-right-style: dotted;",
  "sr-dotted": "border-right-style: dotted;",
  "sr-dashed": "border-right-style: dashed;",
  "sr-s":      "border-right-style: solid;",
  "sr-solid":  "border-right-style: solid;",
  "sr-double": "border-right-style: double;",
  "sr-g":      "border-right-style: groove;",
  "sr-groove": "border-right-style: groove;",
  "sr-r":      "border-right-style: ridge;",
  "sr-ridge":  "border-right-style: ridge;",
  "sr-i":      "border-right-style: inset;",
  "sr-inset":  "border-right-style: inset;",
  "sr-o":      "border-right-style: outset;",
  "sr-outset": "border-right-style: outset;",

  // Width
  "w-{length}":   `border-width: {length};`,
  "wt-{length}":  `border-top-width: {length};`,
  "wb-{length}":  `border-bottom-width: {length};`,
  "wl-{length}":  `border-left-width: {length};`,
  "wr-{length}":  `border-right-width: {length};`

}

export const border = new Module(name, symbol, styles);