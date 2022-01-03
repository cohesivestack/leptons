import { Style } from "../style";
import { Module } from "../module";

const name: string = "Hanging Punctuation";
const symbol: string = "hp";

const styles: { [key: string]: Style } = {
  "n":         "hanging-punctuation: none;",
  "none":      "hanging-punctuation: none;",
  "f":         "hanging-punctuation: first;",
  "first":     "hanging-punctuation: first;",
  "l":         "hanging-punctuation: last;",
  "last":      "hanging-punctuation: last;",
  "ae":        "hanging-punctuation: allow-end;",
  "allowEnd":  "hanging-punctuation: allow-end;",
  "fe":        "hanging-punctuation: force-end;",
  "forceEnd":  "hanging-punctuation: force-end;",
  "{keyword}": "hanging-punctuation: {keyword};",
}

export const hangingPunctuation = new Module(name, symbol, styles);