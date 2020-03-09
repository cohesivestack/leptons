import { Module } from "../module";
import { Atom } from "../atom";
import { isUnitValid, convertUnitToCss } from "../unit-type";
import { getPackage } from ".";

const style: string = "padding";
const symbol: string = "p";

const top = (v: string) => `${style}-top: ${v};`;
const right = (v: string) => `${style}-right: ${v};`;
const bottom = (v: string) => `${style}-bottom: ${v};`;
const left = (v: string) => `${style}-left: ${v};`;

const vertical = (v: string) => `${top(v)} ${bottom(v)}`;
const horizontal = (v: string) => `${left(v)} ${right(v)}`;

const all = (v: string) => `${vertical(v)} ${horizontal(v)}`

const attributes: any = {
  t: top,
  r: right,
  b: bottom,
  l: left,
  v: vertical,
  h: horizontal
} 

export class Padding implements Module {

  getAtom(classParts: string[]): Atom | null {

    if (classParts.length <= 1  || classParts[0] !== symbol) {
      return null;
    }

    const pgk = getPackage();
    const cssClass = classParts.join("-");

    classParts = [...classParts];

    let breakpoint: string | undefined;

    if (/^[A-Z]+$/.test(classParts[classParts.length - 1])) {
      if (classParts.length == 2) {
        return null;
      }

      breakpoint = classParts.pop();

      if (!pgk.breakpoints[breakpoint as string]) {
        throw new Error(`The breakpoint ${breakpoint} used in the class ${cssClass} doesn't exists`);
      }
    }

    let attribute: string | undefined;
    let value: string | undefined;
    let cssValue: string;

    if (classParts.length == 2) {
      value = classParts[1];

      try {
        cssValue = all(convertUnitToCss(value));
      } catch {
        return null;
      }

    } else {
      if (classParts.length > 3) {
        return null;
      }

      attribute = classParts[1];
      const attrFunction = attributes[attribute];
      if (!attrFunction) {
        return null;
      }

      value = classParts[2];

      try {
        cssValue = attrFunction(convertUnitToCss(value));
      } catch {
        return null;
      }
    }

    return new Atom(
      pgk,
      this, 
      cssClass,
      cssValue,
      attribute,
      value,
      breakpoint);
  }
}