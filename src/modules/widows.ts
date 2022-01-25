import { Module } from "../module";

const name: string = "Widows";
const symbol: string = "widows";

const styles: { [key: string]: string } = {

  "{number}":  "widows: {number};",
  "{keyword}": "widows: {keyword};",

}

export const widows = new Module(name, symbol, styles);
