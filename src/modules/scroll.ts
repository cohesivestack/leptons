import { Style } from "../style";
import { Module } from "../module";

const name: string = "Scroll Behavior";
const symbol: string = "sb";

const styles: { [key: string]: Style } = {

  //Scroll Behavior
  "a":           "scroll-behavior: auto;",
  "auto":        "scroll-behavior: auto;",
  "s":           "scroll-behavior: smooth;",
  "smooth":      "scroll-behavior: smooth;",
  "{keyword}":   "scroll-behavior: {keyword};",

}

export const outline = new Module(name, symbol, styles);
