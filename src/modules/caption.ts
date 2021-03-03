import { Style } from "../style";
import { Module } from "../module";

const name: string = "Caption Side";
const symbol: string = "cs";

const styles: { [key: string]: Style } = {

  //Side
  "t":          "caption-side: top;",
  "top":        "caption-side: top;",
  "b":          "caption-side: bottom;",
  "bottom":     "caption-side: bottom;",
  "{keyword}":  "caption-side: {keyword};",
}

export const outline = new Module(name, symbol, styles);
