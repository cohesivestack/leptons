import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "pos";

export const styles: { [key: string]: Style } = {

  "a": "position: absolute;",
  "absolute": "position: absolute;",
  "f": "position: fixed;",
  "fixed": "position: fixed;",
  "rl": "position: relative;",
  "relative": "position: relative;",
  "s": "position: static;'",
  "static": "position: static;'",

  "t": (b: Builder, v: string) => `top: ${b.convertUnitToCss(v)};`,
  "top": (b: Builder, v: string) => `top: ${b.convertUnitToCss(v)};`,
  "b": (b: Builder, v: string) => `bottom: ${b.convertUnitToCss(v)};`,
  "bottom": (b: Builder, v: string) => `bottom: ${b.convertUnitToCss(v)};`,
  "l": (b: Builder, v: string) => `left: ${b.convertUnitToCss(v)};`,
  "left": (b: Builder, v: string) => `left: ${b.convertUnitToCss(v)};`,
  "r": (b: Builder, v: string) => `right: ${b.convertUnitToCss(v)};`,
  "right": (b: Builder, v: string) => `right: ${b.convertUnitToCss(v)};`,

}