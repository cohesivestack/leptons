import { Atom } from "./atom";
import { Package } from "./package";
import { convertUnitToCss, convertUnitsToCss } from "./unit-type";

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

  protected convertUnitToCss(unit: string): string {
    return convertUnitToCss(unit, this.pkg.unit);
  }

  protected convertUnitsToCss(units: string, lengths?: number[]): string {
    return convertUnitsToCss(units, this.pkg.unit, lengths);
  }

  protected getColor(color: string): string {
    if (!this.pkg.colors[color]) {
      throw new Error(`The color ${color} is not valid`);
    }
    return this.pkg.colors[color];
  }

  protected getFontFamily(font: string): string {
    if (!this.pkg.fonts[font]) {
      throw new Error(`The font family ${font} is not valid`);
    }
    return this.pkg.fonts[font];
  }
}