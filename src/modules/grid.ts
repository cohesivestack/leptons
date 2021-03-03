import { Style } from "../style";
import { Module } from "../module";

const name: string = "Grid";
const symbol: string = "g";

const styles: { [key: string]: Style } = {

  //Grid
  "n":          "grid: none;",
  "none":       "grid: none;",
  "{keyword}":  "grid: {keyword};",

  //Template Rows
  "tr-n":           "grid-template-rows: none;",
  "tr-none":        "grid-template-rows: none;",
  "tr-a":           "grid-template-rows: auto;",
  "tr-auto":        "grid-template-rows: auto;",
  "tr-maxc":        "grid-template-rows: max-content;",
  "tr-maxContent":  "grid-template-rows: max-content;",
  "tr-minc":        "grid-template-rows: min-content;",
  "tr-minContent":  "grid-template-rows: min-content;",
  "tr-{length}":    "grid-template-rows: {length};",
  "tr-{keyword}":   "grid-template-rows: {keyword};",

  //Template Columns
  "tc-n":           "grid-template-columns: none;",
  "tc-none":        "grid-template-columns: none;",
  "tc-a":           "grid-template-columns: auto;",
  "tc-auto":        "grid-template-columns: auto;",
  "tc-maxc":        "grid-template-columns: max-content;",
  "tc-maxContent":  "grid-template-columns: max-content;",
  "tc-minc":        "grid-template-columns: min-content;",
  "tc-minContent":  "grid-template-columns: min-content;",
  "tc-{length}":    "grid-template-columns: {length};",
  "tc-{keyword}":   "grid-template-columns: {keyword};",

  //Template Areas
  "ta-n":            "grid-template-areas: none;",
  "ta-none":         "grid-template-areas: none;",
  "ta-{itemnames}":  "grid-template-areas: {itemnames};",
  "ta-{keyword}":    "grid-template-areas: {keyword};",

  //Auto Rows
  "ar-a":           "grid-auto-rows: auto;",
  "ar-auto":        "grid-auto-rows: auto;",
  "ar-maxc":        "grid-auto-rows: max-content;",
  "ar-maxContent":  "grid-auto-rows: max-content;",
  "ar-minc":        "grid-auto-rows: min-content;",
  "ar-minContent":  "grid-auto-rows: min-content;",
  "ar-{length}":    "grid-auto-rows: {length};",
  "ar-{keyword}":   "grid-auto-rows: {keyword};",

  //Auto Columns
  "ac-a":           "grid-auto-columns: auto;",
  "ac-auto":        "grid-auto-columns: auto;",
  "ac-maxc":        "grid-auto-columns: max-content;",
  "ac-maxContent":  "grid-auto-columns: max-content;",
  "ac-minc":        "grid-auto-columns: min-content;",
  "ac-minContent":  "grid-auto-columns: min-content;",
  "ac-{length}":    "grid-auto-columns: {length};",
  "ac-{keyword}":   "grid-auto-columns: {keyword};",

  //Auto Flow
  "af-r":            "grid-auto-flow: row;",
  "af-row":          "grid-auto-flow: row;",
  "af-c":            "grid-auto-flow: column;",
  "af-column":       "grid-auto-flow: column;",
  "af-d":            "grid-auto-flow: dense;",
  "af-dense":        "grid-auto-flow: dense;",
  "af-rd":           "grid-auto-flow: row-dense;",
  "af-rowDense":     "grid-auto-flow: row-dense;",
  "af-cd":           "grid-auto-flow: column-dense;",
  "af-columnDense":  "grid-auto-flow: column-dense;",
  "af-{keyword}":    "grid-auto-flow: {keyword};",

}

export const outline = new Module(name, symbol, styles);
