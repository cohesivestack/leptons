import { Atom } from "./atom";
import { Package } from "./package";

export const NoAttribute = "no-attribute";

export abstract class Module {
  constructor (
    protected pkg: Package,
    readonly symbol: string) {}
  abstract getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined

  protected buildAtom(
    minValuePosition: number,
    classParts: string[],
    cssClass: string,
    styles: any,
    breakpoint: string | undefined): Atom | undefined {

    if (classParts.length === minValuePosition) {
      return undefined;
    }

    const cssValue = styles[classParts.slice(1).join("-")];
    if (!cssValue) {
      return undefined;
    }

    const attribute = classParts.length >= 3 ? classParts[1] : undefined;
    const value = classParts[classParts.length - 1];

    return new Atom(
      this.pkg,
      this,
      cssClass,
      cssValue,
      attribute,
      value,
      breakpoint);
  }


  protected buildAtomWithFunction(
    minValuePosition: number,
    classParts: string[],
    cssClass: string,
    functions: any,
    breakpoint: string | undefined): Atom | undefined {

    if (classParts.length === minValuePosition) {
      return undefined;
    }

    const withAttribute = classParts.length >= 3;

    const func = withAttribute ?
      functions[classParts[1]] :
      functions[NoAttribute];

    if (!func) {
      return undefined;
    }

    const value = classParts[classParts.length - 1];

    const cssValue = func(value);

    const attribute = withAttribute ? classParts[1] : undefined;

    return new Atom(
      this.pkg,
      this,
      cssClass,
      cssValue,
      attribute,
      value,
      breakpoint);
  }
}