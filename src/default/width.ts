import { Module } from "../module";
import { Atom } from "../atom";
import { getPackage } from ".";
import { convertUnitToCss } from "../unit-type";

const functions: any = {
  "no-attribute": (v: string) => `width: ${convertUnitToCss(v)};`,
} 

export class Width extends Module {

  constructor() { super(getPackage(), "w"); }

  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined {

    return this.buildAtomWithFunction(
      1,
      classParts,
      cssClass,
      functions,
      breakpoint
    );
  }
}