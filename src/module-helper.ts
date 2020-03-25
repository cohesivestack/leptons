import { Package } from "./package";
import { Module } from "./module";
import { convertUnitToCss } from "./unit-type";
import { Atom } from "./atom";

export class CommonCss {
  static top(style: string, value: string) {
    return `${style}-top: ${value};`;
  }
  static right(style: string, value: string) {
    return `${style}-right: ${value};`;
  }
  static bottom(style: string, value: string) {
    return `${style}-bottom: ${value};`;
  }
  static left(style: string, value: string) {
    return `${style}-left: ${value};`;
  }
  static vertical(style: string, value: string) {
    return `${CommonCss.top(style, value)} ${CommonCss.bottom(style, value)}`;
  }
  static horizontal(style: string, value: string) {
    return `${CommonCss.left(style, value)} ${CommonCss.right(style, value)}`;
  }
  static all(style: string, value: string) {
    return `${CommonCss.vertical(style, value)} ${CommonCss.horizontal(style, value)}`;
  }
}

export function getAtomPartsForAxisCss(
    pkg: Package,
    mod: Module,
    classParts: string[],
    cssClass: string,
    attributeFunctions: any,
    cssAttribute: string,
    breakpoint?: string): Atom | undefined {

  let attribute: string | undefined;
  let value: string | undefined;
  let cssValue: string;

  if (breakpoint && classParts.length == 1) {
    return undefined;
  }

  if (classParts.length == 2) {
    value = classParts[1];

    try {
      cssValue = CommonCss.all(cssAttribute, convertUnitToCss(value));
    } catch {
      return undefined;
    }

  } else {
    if (classParts.length > 3) {
      return undefined;
    }

    attribute = classParts[1];
    const attrFunction = attributeFunctions[attribute];
    if (!attrFunction) {
      return undefined;
    }

    value = classParts[2];

    try {
      cssValue = attrFunction(cssAttribute, convertUnitToCss(value));
    } catch {
      return undefined;
    }
  }

  return new Atom(
    pkg,
    mod,
    cssClass,
    cssValue,
    attribute,
    value,
    breakpoint);
}