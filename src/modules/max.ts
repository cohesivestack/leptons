import { Style } from "../style";
import { Module } from "../module";

const name: string = "Max";
const symbol: string = "max";

const styles: { [key: string]: Style } = {

  //Width
  "w-{length}": "max-width: {length};",

  //Height
  "h-{length}": "max-height: {length};",

}

export const max = new Module(name, symbol, styles);