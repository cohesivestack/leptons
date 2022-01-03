import { Style } from "../style";
import { Module } from "../module";

const name: string = "Order";
const symbol: string = "order";

const styles: { [key: string]: Style } = {
  "{number}":  "order: {number};",
  "{keyword}": "order: {keyword};"
}

export const order = new Module(name, symbol, styles);