import { Style } from "../style";
import { Module } from "../module";

const name: string = "Background";
const symbol: string = "bg";

const styles: { [key: string]: Style } = {

  // Position
  "p-lt":           "background-position: left top;",
  "p-leftTop":      "background-position: left top;",
  "p-lc":           "background-position: left center;",
  "p-leftCenter":   "background-position: left center;",
  "p-lb":           "background-position: left bottom;",
  "p-leftBottom":   "background-position: left bottom;",
  "p-rt":           "background-position: right top;",
  "p-rightTop":     "background-position: right top;",
  "p-rc":           "background-position: right center;",
  "p-rightCenter":  "background-position: right center;",
  "p-rb":           "background-position: right bottom;",
  "p-rightBottom":  "background-position: right bottom;",
  "p-ct":           "background-position: center top;",
  "p-centerTop":    "background-position: center top;",
  "p-cc":           "background-position: center center;",
  "p-centerCenter": "background-position: center center;",
  "p-cb":           "background-position: center bottom;",
  "p-centerBottom": "background-position: center bottom;",
  "p-{length}":     "background-position: {length};",
  "p-{keyword}":    "background-position: {keyword};",

  // Size
  "s-a":         "background-size: auto;",
  "s-auto":      "background-size: auto;",
  "s-c":         "background-size: cover;",
  "s-cover":     "background-size: cover;",
  "s-contain":   "background-size: contain;",
  "s-{length2}": "background-size: {length2};",
  "s-{keyword}": "background-size: {keyword};",

  // Repeat
  "r-r":         "background-repeat: repeat;",
  "r-repeat":    "background-repeat: repeat;",
  "r-rx":        "background-repeat: repeat-x;",
  "r-repeatX":   "background-repeat: repeat-x;",
  "r-ry":        "background-repeat: repeat-y;",
  "r-repeatY":   "background-repeat: repeat-y;",
  "r-n":         "background-repeat: no-repeat;",
  "r-noRepeat":  "background-repeat: no-repeat;",
  "r-s":         "background-repeat: space;",
  "r-space":     "background-repeat: space;",
  "r-round":     "background-repeat: round;",
  "r-{keyword}": "background-repeat: {keyword};",

  // Origin
  "o-pb":         "background-origin: padding-box;",
  "o-paddingBox": "background-origin: padding-box;",
  "o-bb":         "background-origin: border-box;",
  "o-borderBox":  "background-origin: border-box;",
  "o-cb":         "background-origin: content-box;",
  "o-contentBox": "background-origin: content-box;",
  "o-{keyword}":  "background-origin: {keyword};",

  // Clip
  "clip-pb":         "background-clip: padding-box;",
  "clip-paddingBox": "background-clip: padding-box;",
  "clip-bb":         "background-clip: border-box;",
  "clip-borderBox":  "background-clip: border-box;",
  "clip-cb":         "background-clip: content-box;",
  "clip-contentBox": "background-clip: content-box;",
  "clip-{keyword}":  "background-clip: {keyword};",

  // Attachment
  "a-s":         "background-attachment: scroll;",
  "a-scroll":    "background-attachment: scroll;",
  "a-f":         "background-attachment: fixed;",
  "a-fixed":     "background-attachment: fixed;",
  "a-l":         "background-attachment: local;",
  "a-local":     "background-attachment: local;",
  "a-{keyword}": "background-attachment: {keyword};",

  // Background Color
  "c-{color}":   "background-color: {color};",
  "c-{keyword}": "background-color: {keyword};"
}

export const background = new Module(name, symbol, styles);