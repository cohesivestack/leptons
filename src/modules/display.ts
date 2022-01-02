import { Style } from "../style";
import { Module } from "../module";

const name: string = "Display";
const symbol: string = "d";

const styles: { [key: string]: Style } = {

  "c":                "display: contents;",
  "contents":         "display: contents;",
  "n":                "display: none;",
  "none":             "display: none;",
  "i":                "display: inline;",
  "inline":           "display: inline;",
  "b":                "display: block;",
  "block":            "display: block;",
  "f":                "display: flex;",
  "flex":             "display: flex;",
  "g":                "display: grid;",
  "grid":             "display: grid;",
  "t":                "display: table;",
  "table":            "display: table;",
  "ib":               "display: inline-block;",
  "inlineBlock":      "display: inline-block;",
  "if":               "display: inline-flex;",
  "inlineFlex":       "display: inline-flex;",
  "ig":               "display: inline-grid;",
  "inlineGrid":       "display: inline-grid;",
  "it":               "display: inline-table;",
  "inlineTable":      "display: inline-table;",
  "li":               "display: list-item;",
  "listItem":         "display: list-item;",
  "ri":               "display: run-in;",
  "runIn":            "display: run-in;",
  "tr":               "display: table-row;",
  "tableRow":         "display: table-row;",
  "trg":              "display: table-row-group;",
  "tableRowGroup":    "display: table-row-group;",
  "tableCaption":     "display: table-caption;",
  "tc":               "display: table-column;",
  "tableColumn":      "display: table-column;",
  "tcg":              "display: table-column-group;",
  "tableColumnGroup": "display: table-column-group;",
  "tCell":            "display: table-cell;",
  "tableCell":        "display: table-cell;",
  "thg":              "display: table-header-group;",
  "tableHeaderGroup": "display: table-header-group;",
  "tfg":              "display: table-footer-group;",
  "tableFooterGroup": "display: table-footer-group;",
  "{keyword}":        "display: {keyword};"

}

export const display = new Module(name, symbol, styles);