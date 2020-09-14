import { Style } from "../style";
import { Module } from "../module";

const name: string = "Visibility";
const symbol: string = "v";

const styles: { [key: string]: Style } = {

  "c": "visibility: collapse;",
  "h": "visibility: hidden;",
  "v": "visibility: visible;"

}

export const visibility = new Module(name, symbol, styles);