import { Module } from "../module";

const name: string = "empty-cells";
const symbol: string = "ec";

const styles: { [key: string]: string } = {
  "s":         "empty-cells: show;",
  "show":      "empty-cells: show;",
  "h":         "empty-cells: hide;",
  "hide":      "empty-cells: hide;",
  "{keyword}": "empty-cells: {keyword};",
}

export const emptyCells = new Module(name, symbol, styles);