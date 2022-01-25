import { Module } from "../module";

const name: string = "Resize";
const symbol: string = "r";

const styles: { [key: string]: string } = {

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

export const resize = new Module(name, symbol, styles);
