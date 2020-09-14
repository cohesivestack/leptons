import { Style } from "../style";
import { Module } from "../module";

const name: string = "Height";
const symbol: string = "h";

const styles: { [key: string]: Style } = {

  "{length}": "height: {length};",

}

export const height = new Module(name, symbol, styles);