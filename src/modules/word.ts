import { Style } from "../style";
import { Module } from "../module";

const name: string = "Word";
const symbol: string = "w";

const styles: { [key: string]: Style } = {

  //Word Break
  "b-n":          "word-break: normal;",
  "b-normal":     "word-break: normal;",
  "b-ba":         "word-break: break-all;",
  "b-breakAll":   "word-break: break-all;",
  "b-ka":         "word-break: keep-all;",
  "b-keepAll":    "word-break: keep-all;",
  "b-bw":         "word-break: break-word;",
  "b-breakWord":  "word-break: break-word;",
  "b-{keyword}":  "word-break: {keyword};",

  //Word Spacing
  "s-n":          "word-spacing: normal;",
  "s-normal":     "word-spacing: normal;",
  "s-{length}":   "word-spacing: {length};",
  "s-{keyword}":  "word-spacing: {keyword};",

  //Word Wrap
  "w-n":           "word-wrap: normal;",
  "w-normal":      "word-wrap: normal;",
  "w-bw":          "word-wrap: break-word;",
  "w-breakWord":   "word-wrap: break-word;",
  "w-{length}":    "word-wrap: {length};",
  "w-{keyword}":   "word-wrap: {keyword};",

}

export const word = new Module(name, symbol, styles);
