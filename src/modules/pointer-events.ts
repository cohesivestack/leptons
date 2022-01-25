import { Module } from "../module";

const name: string = "Pointer Events";
const symbol: string = "pe";

const styles: { [key: string]: string } = {

  // Pointer Events
  "a":         "pointer-events: auto;",
  "auto":      "pointer-events: auto;",
  "n":         "pointer-events: none;",
  "none":      "pointer-events: none;",
  "{keyword}": "pointer-events: {keyword};",
}

export const pointerEvents = new Module(name, symbol, styles);