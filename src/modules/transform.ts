import { Style } from "../style";
import { Module } from "../module";

const name: string = "Transform";
const symbol: string = "tf";

const styles: { [key: string]: Style } = {

  //Transform
  "n":       "transform: none;",
  "none":    "transform: none;",

  //TO DO
  "{lenght}":   "transform: {lenght};",
  "{keyword}":  "transform: {keyword};",

}

export const outline = new Module(name, symbol, styles);
