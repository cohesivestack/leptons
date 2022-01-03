import { Style } from "../style";
import { Module } from "../module";

const name: string = "Orphans";
const symbol: string = "orphans";

const styles: { [key: string]: Style } = {

  "{number}":  "orphans: {number};",
  "{keyword}": "orphans: {keyword};",

}

export const orphans = new Module(name, symbol, styles);