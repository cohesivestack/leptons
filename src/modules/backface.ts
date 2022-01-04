import { Style } from "../style";
import { Module } from "../module";

const name: string = "Backface Visibility";
const symbol: string = "bv";

const styles: { [key: string]: Style } = {

  "v":          "backface-visibility: visible;",
  "visible":    "backface-visibility: visible;",
  "h":          "backface-visibility: hidden;",
  "hidden":     "backface-visibility: hidden;",
  "{keyword}":  "backface-visibility: {keyword};",
}

export const backface = new Module(name, symbol, styles);
