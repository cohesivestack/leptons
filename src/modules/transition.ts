import { Style } from "../style";
import { Module } from "../module";

const name: string = "Transition";
const symbol: string = "trans";

const styles: { [key: string]: Style } = {

  //Transition Property
  "n":          "transition-property: none;",
  "none":       "transition-property: none;",
  "a":          "transition-property: all;",
  "all":        "transition-property: all;",

  //TO DO

  "{keyword}":  "transition-property: {keyword};",

}

export const transition = new Module(name, symbol, styles);
