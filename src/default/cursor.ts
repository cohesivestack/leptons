import { Module } from "../module";
import { Atom } from "../atom";
import { DefaultPackage } from "./default-package";

const styles: any = {
  a:           "cursor: auto;",
  auto:        "cursor: auto;",
  alias:       "cursor: alias;",
  as:          "cursor: all-scroll;",
  allScroll:   "cursor: all-scroll;",
  c:           "cursor: copy;",
  copy:        "cursor: copy;",
  cell:        "cursor: cell;",
  cm:          "cursor: context-menu;",
  contextMenu: "cursor: context-menu;",
  cr:          "cursor: col-resize;",
  colResize:   "cursor: col-resize;",
  crosshair:   "cursor: crosshair;",
  d:           "cursor: default;",
  default:     "cursor: default;",
  er:          "cursor: e-resize;",
  eResize:     "cursor: e-resize;",
  ewr:         "cursor: ew-resize;",
  ewResize:    "cursor: ew-resize;",
  g:           "cursor: grab;",
  grab:        "cursor: grab;",
  grabbing:    "cursor: grabbing;",
  h:           "cursor: help;",
  help:        "cursor: help;",
  m:           "cursor: move;",
  move:        "cursor: move;",
  nr:          "cursor: n-resize;",
  nResize:     "cursor: n-resize;",
  ner:         "cursor: ne-resize;",
  neResize:    "cursor: ne-resize;",
  neswr:       "cursor: nesw-resize;",
  neswResize:  "cursor: nesw-resize;",
  nsr:         "cursor: ns-resize;",
  nsResize:    "cursor: ns-resize;",
  nwr:         "cursor: nw-resize;",
  nwResize:    "cursor: nw-resize;",
  nwser:       "cursor: nwse-resize;",
  nwseResize:  "cursor: nwse-resize;",
  nd:          "cursor: no-drop;",
  noDrop:      "cursor: no-drop;",
  n:           "cursor: none;",
  none:        "cursor: none;",
  na:          "cursor: not-allowed;",
  notAllowed:  "cursor: not-allowed;",
  p:           "cursor: pointer;",
  pointer:     "cursor: pointer;",
  progress:    "cursor: progress;",
  rr:          "cursor: row-resize;",
  rowResize:   "cursor: row-resize;",
  sr:          "cursor: s-resize;",
  sResize:     "cursor: s-resize;",
  ser:         "cursor: se-resize;",
  seResize:    "cursor: se-resize;",
  swr:         "cursor: sw-resize;",
  swResize:    "cursor: sw-resize;",
  t:           "cursor: text;",
  text:        "cursor: text;",
  wr:          "cursor: w-resize;",
  wResize:     "cursor: w-resize;",
  w:           "cursor: wait;",
  wait:        "cursor: wait;",
  zi:          "cursor: zoom-in;",
  zoomIn:      "cursor: zoom-in;",
  zo:          "cursor: zoom-out;",
  zoomOut:     "cursor: zoom-out;"
}

export class Cursor extends Module {

  constructor(pkg: DefaultPackage) { super(pkg, "c"); }

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