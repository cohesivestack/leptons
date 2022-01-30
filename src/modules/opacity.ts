import { Module } from "../module";

const name: string = "Opacity";
const symbol: string = "o";

const styles: { [key: string]: string } = {
  "{number$number}":  "opacity: {number};",
  "{keyword}":        "opacity: {keyword};"
}

export const opacity = new Module(name, symbol, styles);