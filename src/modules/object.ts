import { Module } from "../module";

const name: string = "Object";
const symbol: string = "obj";

const styles: { [key: string]: string } = {

  // Fit
  "f-c":         "object-fit: cover;",
  "f-cover":     "object-fit: cover;",
  "f-contain":   "object-fit: contain;",
  "f-f":         "object-fit: fill;",
  "f-fill":      "object-fit: fill;",
  "f-n":         "object-fit: none;",
  "f-none":      "object-fit: none;",
  "f-sd":        "object-fit: scale-down;",
  "f-scaleDown": "object-fit: scale-down;",
  "f-{keyword}": "object-fit: {keyword};",

  // Position
  "p-lt":                                    "object-position: left top;",
  "p-leftTop":                               "object-position: left top;",
  "p-lc":                                    "object-position: left center;",
  "p-leftCenter":                            "object-position: left center;",
  "p-lb":                                    "object-position: left bottom;",
  "p-leftBottom":                            "object-position: left bottom;",
  "p-rt":                                    "object-position: right top;",
  "p-rightTop":                              "object-position: right top;",
  "p-rc":                                    "object-position: right center;",
  "p-rightCenter":                           "object-position: right center;",
  "p-rb":                                    "object-position: right bottom;",
  "p-rightBottom":                           "object-position: right bottom;",
  "p-ct":                                    "object-position: center top;",
  "p-centerTop":                             "object-position: center top;",
  "p-cc":                                    "object-position: center center;",
  "p-centerCenter":                          "object-position: center center;",
  "p-cb":                                    "object-position: center bottom;",
  "p-centerBottom":                          "object-position: center bottom;",
  "p-{horizontal$length}_{vertical$length}": "object-position: {horizontal} {vertical};",
  "p-{keyword}":                             "object-position: {keyword};",

}

export const object = new Module(name, symbol, styles);