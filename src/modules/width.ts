import { Style } from "../style";
import { Module } from "../module";

const name: string = "Width";
const symbol: string = "w";

const styles: { [key: string]: Style } = {

  "{length}":  "width: {length};",
  "{keyword}": "width: {keyword};"

}

export const width = new Module(name, symbol, styles);