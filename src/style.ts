import { inherits } from "util";
import { BuilderContext } from "./builder-context";

const regexLiteral = /^[a-z][a-zA-Z]*(-[a-z][a-zA-Z]*){0,2}$/;
const regexItem = /^([a-z][a-zA-Z]*-){0,2}(\{[a-z][a-zA-Z0-9]*\})$/;
const regexKeyword = /^(initial|inherit|unset|revert)$/

export type StyleFunc =
  ((b: BuilderContext, v: string) => string);

export type StyleItemFunc =
  [ string,  (b: BuilderContext, v: string) => string ];

export type Style =
  string |
  StyleFunc |
  StyleItemFunc;

export function isStyleString(style: Style): style is string {
  return typeof style === "string";
}

export function isStyleFunc(style: Style): style is StyleFunc {
    return typeof style === "function";
}

export function isStyleItemFunc(style: Style): style is StyleItemFunc {
  return typeof style === "object";
}

export function isValidStyleLiteral(literal: string): boolean {
  return regexLiteral.test(literal);
}

export function isValidStringItem(item: string): boolean {
  return regexItem.test(item);
}

export function isValidStringKeyword(keyword: string): boolean {
  return regexKeyword.test(keyword);
}