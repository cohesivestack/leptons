import { Module } from "../module";

const name: string = "Perspective";
const symbol: string = "perspective";

const styles: { [key: string]: string } = {

  "n":                "perspective: none;",
  "none":             "perspective: none;",
  "{length$length}":  "perspective: {length};",
  "{keyword}":        "perspective: {keyword};",

}

export const perspective = new Module(name, symbol, styles);
