import { Style } from "../style";
import { Module } from "../module";

const name: string = "Resize";
const symbol: string = "r";

const styles: { [key: string]: Style } = {

  //Resize
  "n":           "resize: none;",
  "none":        "resize: none;",
  "b":           "resize: both;",
  "both":        "resize: both;",
  "h":           "resize: horizontal;",
  "horizontal":  "resize: horizontal;",
  "v":           "resize: vertical;",
  "vertical":    "resize: vertical;",
  "{keyword}":   "resize: {keyword};",

}

export const outline = new Module(name, symbol, styles);
