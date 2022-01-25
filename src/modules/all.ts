import { Module } from "../module";

const name: string = "All";
const symbol: string = "all";

const styles: { [key: string]: string } = {
  "{keyword}": "all: {keyword};"
}

export const all = new Module(name, symbol, styles);
