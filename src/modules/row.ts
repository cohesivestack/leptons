import { Module } from "../module";

const name: string = "Row";
const symbol: string = "row";

const styles: { [key: string]: string } = {

  // Row Gap
  "g-n":                "row-gap: normal;",
  "g-normal":           "row-gap: normal;",
  "g-{length$length}":  "row-gap: {length};",
  "g-{keyword}":        "row-gap: {keyword};",

}

export const row = new Module(name, symbol, styles);
