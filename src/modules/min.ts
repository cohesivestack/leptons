import { Style } from "../style";
import { Module } from "../module";

const name: string = "Min";
const symbol: string = "min";

const styles: { [key: string]: Style } = {

  //Width
  "w-{length}": "min-width: {length};",

  //Height
  "h-{length}": "min-height: {length};",

}

export const min = new Module(name, symbol, styles);