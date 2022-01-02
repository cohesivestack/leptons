import { Style } from "../style";
import { Module } from "../module";

const name: string = "Max";
const symbol: string = "max";

const styles: { [key: string]: Style } = {

  //Width
  "w-n":         "max-width: none;",
  "w-none":      "max-width: none;",
  "w-{length}":  "max-width: {length};",
  "w-{keyword}": "max-width: {keyword};",

  //Height
  "h-n":         "max-height: none;",
  "h-none":      "max-height: none;",
  "h-{length}":  "max-height: {length};",
  "h-{keyword}": "max-height: {keyword};"

}

export const max = new Module(name, symbol, styles);