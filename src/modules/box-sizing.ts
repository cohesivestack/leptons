import { Style } from "../style";
import { Module } from "../module";

const name: string = "Box Sizing";
const symbol: string = "bs";

const styles: { [key: string]: Style } = {

  // Box Sizing
  "c": "box-sizing: content-box;",
  "b": "box-sizing: border-box;"

}

export const boxSizing = new Module(name, symbol, styles);