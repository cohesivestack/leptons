import { Style } from "../style";
import { Module } from "../module";

const name: string = "All";
const symbol: string = "all";

const styles: { [key: string]: Style } = {
  "{keyword}": "all: {keyword};"
}

export const all = new Module(name, symbol, styles);
