import { Style } from "../style";
import { Module } from "../module";

const name = "Text";
const symbol: string = "t";

const styles: { [key: string]: Style } = {
  // Align
  "a-l":         "text-align: left;",
  "a-left":      "text-align: left;",
  "a-c":         "text-align: center;",
  "a-center":    "text-align: center;",
  "a-r":         "text-align: right;",
  "a-right":     "text-align: right;",
  "a-j":         "text-align: jusitify;",
  "a-justify":   "text-align: jusitify;",
  "a-{keyword}": "text-align: {keyword};",

  // Color
  "c-{color}":   "color: {color};",
  "c-{keyword}": "color: {keyword};",

  // Decoration
  "dc-{color}":   "text-decoration-color: {color};",
  "dc-{keyword}": "text-decoration-color: {keyword};",

  // Decoration Line
  "dl-u":            "text-decoration-line: underline;",
  "dl-underline":    "text-decoration-line: underline;",
  "dl-o":            "text-decoration-line: overline;",
  "dl-overline":     "text-decoration-line: overline;",
  "dl-lt":           "text-decoration-line: line-through;",
  "dl-line-through": "text-decoration-line: line-through;",
  "dl-n":            "text-decoration-line: none;",
  "dl-none":         "text-decoration-line: none;",
  "dl-{keyword}":    "text-decoration-line: {keyword};",

  // Decoration Style
  "ds-s":         "text-decoration-style: solid;",
  "ds-solid":     "text-decoration-style: solid;",
  "ds-d":         "text-decoration-style: dotted;",
  "ds-dotted":    "text-decoration-style: dotted;",
  "ds-dashed":    "text-decoration-style: dashed;",
  "ds-w":         "text-decoration-style: wavy;",
  "ds-{keyword}": "text-decoration-style: {keyword};",

  // Indent
  "i-{length}":  "text-indent: {length};",
  "i-{keyword}": "text-indent: {keyword};",

  // Justify
  "j-a":              "text-justify: auto;",
  "j-auto":           "text-justify: auto;",
  "j-iw":             "text-justify: inter-word;",
  "j-interWord":      "text-justify: inter-word;",
  "j-ic":             "text-justify: inter-character;",
  "j-interCharacter": "text-justify: inter-character;",
  "j-n":              "text-justify: none;",
  "j-none":           "text-justify: none;",
  "j-{keyword}":      "text-justify: {keyword};",

  // Overflow
  "o-c":         "text-overflow: clip;",
  "o-clip":      "text-overflow: clip;",
  "o-e":         "text-overflow: ellipsis;",
  "o-ellipsis":  "text-overflow: ellipsis;",
  "o-{keyword}": "text-overflow: {keyword};",

  // Transform
  "t-u":         "text-transform: uppercase;",
  "t-l":         "text-transform: lowercase;",
  "t-c":         "text-transform: capitalize;",
  "t-n":         "text-transform: none;",
  "t-{keyword}": "text-transform: {keyword};"
}

export const text = new Module(name, symbol, styles);