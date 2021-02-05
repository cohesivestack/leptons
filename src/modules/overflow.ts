import { Style } from "../style";
import { Module } from "../module";

const name: string = "Overflow";
const symbol: string = "of";

const styles: { [key: string]: Style } = {
  "v": "overflow: visible;",
  "visible": "overflow: visible;",
  "h": "overflow: hidden;",
  "hidden": "overflow: hidden;",
  "s": "overflow: scroll;",
  "scroll": "overflow: scroll;",
  "a": "overflow: auto;",
  "auto": "overflow: auto;",
  "i": "overflow: inherit;",
  "inherit": "overflow: inherit;",
  "init": "overflow: initial;",
  "initial": "overflow: initial;",

  "x-v": "overflow-x: visible;",
  "x-visible": "overflow-x: visible;",
  "x-h": "overflow-x: hidden;",
  "x-hidden": "overflow-x: hidden;",
  "x-s": "overflow-x: scroll;",
  "x-scroll": "overflow-x: scroll;",
  "x-a": "overflow-x: auto;",
  "x-auto": "overflow-x: auto;",
  "x-i": "overflow-x: inherit;",
  "x-inherit": "overflow-x: inherit;",
  "x-init": "overflow-x: initial;",
  "x-initial": "overflow-x: initial;",

  "y-v": "overflow-y: visible;",
  "y-visible": "overflow-y: visible;",
  "y-h": "overflow-y: hidden;",
  "y-hidden": "overflow-y: hidden;",
  "y-s": "overflow-y: scroll;",
  "y-scroll": "overflow-y: scroll;",
  "y-a": "overflow-y: auto;",
  "y-auto": "overflow-y: auto;",
  "y-i": "overflow-y: inherit;",
  "y-inherit": "overflow-y: inherit;",
  "y-init": "overflow-y: initial;",
  "y-initial": "overflow-y: initial;"
}

export const overflow = new Module(name, symbol, styles);