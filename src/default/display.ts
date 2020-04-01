import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  n: "display: none;",
  none: "display: none;",
  i: "display: inline;",
  inline: "display: inline;",
  b: "display: block;",
  block: "display: block;",
  f: "display: flex;",
  flex: "display: flex;",
  t: "display: table;",
  table: "display: table;",
  ib: "display: inline-block;",
  inlineBlock: "display: inline-block;",
  it: "display: inline-table;",
  inlineTable: "display: inline-table;",
  tr: "display: table-row;",
  tableRow: "display: table-row;",
  trg: "display: table-row-group;",
  tableRowGroup: "display: table-row-group;",
  tc: "display: table-column;",
  tableColumn: "display: table-column;",
  tcg: "display: table-column-group;",
  tableColumnGroup: "display: table-column-group;",
  tCell: "display: table-cell;'",
  tableCell: "display: table-cell;'"
}

export class Display extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "d"); }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {
    return this.buildAtom(
      1,
      classParts,
      cssClass,
      styles,
      breakpoint
    )
  }
}