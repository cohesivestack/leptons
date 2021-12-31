import { Style } from "../style";
import { Module } from "../module";

const name: string = "Transform";
const symbol: string = "tf";

const styles: { [key: string]: Style } = {

  //Transform
  "n":       "transform: none;",
  "none":    "transform: none;",

  //TO DO
  "{length}":   "transform: {length};",
  "{keyword}":  "transform: {keyword};",

}

export const transform = new Module(name, symbol, styles);
