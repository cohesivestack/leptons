import { Style } from "../style";
import { Module } from "../module";

const name: string = "Transform";
const symbol: string = "tf";

const styles: { [key: string]: Style } = {

  // Style
  "s-f":              "transform-style: flat;",
  "s-flat":           "transform-style: flat;",
  "s-ptd":            "transform-style: preserve-3d;",
  "s-preserveThreeD": "transform-style: preserve-3d;",
  "s-{keyword}":      "transform-style: {keyword};",

}

export const transform = new Module(name, symbol, styles);
