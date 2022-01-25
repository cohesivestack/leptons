import { Module } from "../module";

const name: string = "List";
const symbol: string = "ls";

const styles: { [key: string]: string } = {

  //List Style
  "{keyword}":  "list-style: {keyword};",

  //List Style Type
  "t-d":                "list-style-type: disc;",
  "t-disc":             "list-style-type: disc;",
  "t-a":                "list-style-type: armenian;",
  "t-armenian":         "list-style-type: armenian;",
  "t-c":                "list-style-type: circle;",
  "t-circle":           "list-style-type: circle;",
  "t-cjk":              "list-style-type: cjk-ideographic;",
  "t-cjkIdeographic":   "list-style-type: cjk-ideographic;",
  "t-decimal":          "list-style-type: decimal;",
  "t-dlz":              "list-style-type: decimal-leading-zero;",
  "t-g":                "list-style-type: georgian;",
  "t-georgian":         "list-style-type: georgian;",
  "t-h":                "list-style-type: hebrew;",
  "t-hebrew":           "list-style-type: hebrew;",
  "t-hiragana":         "list-style-type: hiragana;",
  "t-hiraganaIroha":    "list-style-type: hiragana-iroha;",
  "t-katakana":         "list-style-type: katakana;",
  "t-katakanaIroha":    "list-style-type: katakana-iroha;",
  "t-lowerAlpha":       "list-style-type: lower-alpha;",
  "t-lowerGreek":       "list-style-type: lower-greek;",
  "t-lowerLatin":       "list-style-type: lower-latin;",
  "t-lowerRoman":       "list-style-type: lower-roman;",
  "t-n":                "list-style-type: none;",
  "t-none":             "list-style-type: none;",
  "t-s":                "list-style-type: square;",
  "t-square":           "list-style-type: square;",
  "t-ua":               "list-style-type: upper-alpha;",
  "t-upperAlpha":       "list-style-type: upper-alpha;",
  "t-ug":               "list-style-type: upper-greek;",
  "t-upperGreek":       "list-style-type: upper-greek;",
  "t-ul":               "list-style-type: upper-latin;",
  "t-upperLatin":       "list-style-type: upper-latin;",
  "t-ur":               "list-style-type: upper-roman;",
  "t-upperRoman":       "list-style-type: upper-roman;",
  "t-{keyword}":        "list-style-type: {keyword};",

  //List Style Position
  "p-i":          "list-style-position: inside;",
  "p-inside":     "list-style-position: inside;",
  "p-o":          "list-style-position: outside;",
  "p-outside":    "list-style-position: outside;",
  "p-{keyword}":  "list-style-position: {keyword};",

  //List Style Image
  "i-n":          "list-style-image: none;",
  "i-none":       "list-style-image: none;",
  "i-{url}":      "list-style-image: url{url};",
  "i-{keyword}":  "list-style-image: {keyword};",
}

export const list = new Module(name, symbol, styles);
