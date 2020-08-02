import { Atom } from "./atom";
import { StyleItemFunc, StyleFunc } from "./style";
import { Module } from "./module";
import { ErrorType } from "./error";
import { BuilderContext } from "./builder-context";
import { isLengthValid, LengthType } from "./length";

export class Builder {

  private fonts: { [font: string]: string } = {};
  private colors: { [color: string]: string } = {};
  private modules: { [moduleName: string]: Module } = {};
  private errors: { [errorType: string]: { [className: string]: string } } = {};
  private classesIndex: string[] = [];
  private medias: { [media: string]: { [className: string]: string } } = {}
  private context: BuilderContext;
  private lengthType: LengthType;

  constructor() {
    this.context = new BuilderContext(this);
    this.lengthType = LengthType.Rem;
  }

  private addError(errorType: ErrorType, className: string, errorMessage: string) {
    if (!this.errors[errorType]) {
      this.errors[errorType] = {};
    }

    this.errors[errorType][className] = errorMessage;
    this.classesIndex.push(className);
  }

  public addModule(mod: Module) {
    this.modules[mod.symbol] = mod;
  }

  public addClassName(className: string) {
    // Check if this css already was processed
    if (this.classesIndex.indexOf(className) > -1) {
      return;
    }

    let atom: Atom;
    try {
      atom = new Atom(className);
    } catch (e) {
      this.addError(ErrorType.Marformed, className, e);
      return;
    }

    // Check if module exist
    if (!this.modules[<string>atom.module]) {
      this.addError(ErrorType.NotMatching, className, `Module "${atom.module}" doesn't exist`);
      return;
    }

    // Add atom to css styles
    try {
      const cssStyle = this.atomToCssStyle(this.modules[<string>atom.module], atom);

      if (!atom.medias) {
        // No media
        this.medias[""][className] = cssStyle;
      } else {
        atom.medias.forEach(media => {
          if (!this.medias[media]) {
            this.addError(ErrorType.NotMatching, className, `media "${media}" doesn't exist`);
            return
          }
        });
        atom.medias.forEach(media => {
          this.medias[media][className] = cssStyle;
        });
      }
    } catch (e) {
      this.addError(ErrorType.Marformed, className, e);
      return;
    }
  }


  public atomToCssStyle(mod: Module, atom: Atom): string  {

    let cssStyle: string | undefined

    let literalValue: string | undefined;
    let item: {itemName: string, style: string } | undefined;
    let itemFunction: { itemName: string, style: StyleItemFunc } | undefined | undefined;
    let func: StyleFunc | undefined;

    let keyModule = atom.attribute ? `${atom.attribute}-${atom.value}` : atom.value;

    if (literalValue = mod.getLiteral(keyModule)) {

      cssStyle = literalValue;

    } else {

      if (atom.attribute) {
        keyModule = atom.attribute;
      }

      if (item = mod.getItem(keyModule)) {

        const template = item.style;
        cssStyle = template.replace(`{${item.itemName}}`, this.parseItemValue(item.itemName, atom));

      } else if (itemFunction = mod.getItemFunction(keyModule)) {

        const template = itemFunction.style[0];
        const func = itemFunction.style[1];
        cssStyle = template.replace(
            `{${itemFunction.itemName}}`,
            func(this.context, atom.value));

      } else if (func = mod.getFunction(keyModule)) {
        cssStyle = func(this.context, atom.value);

      }
    }

    if (!cssStyle) {
      throw new Error(`Not match any key in the module "${atom.module}"`);
    }

    return cssStyle;
  }

  private parseItemValue(itemName: string, atom: Atom): string {
    const value = atom.value as string;

    switch (itemName) {
      case "length":
        return this.convertLengthToCss(value);
      case "length2":
        return this.convertLength2ToCss(value);
      case "length4":
        return this.convertLength4ToCss(value);
      case "color":
        return this.getColor(value);
      case "font":
        return this.getFont(value);
      default:
        return value
    }
  }

  convertLengthToCss(length: string): string {
    if (!isLengthValid(length)) {
      throw new Error(`The value ${length} is not valid`);
    }
  
    let value = length.replace("_", ".");
  
    if (/^[0-9_]*\d$/.test(length)) {
      value += this.lengthType;
    }
  
    if (/[0-9]+p$/.test(length)) {
      value = value.replace("p", "%");
    }
  
    return value;
  }

  convertLength2ToCss(length: string): string {
    return this.convertLengthsToCss(length, 2);
  }

  convertLength4ToCss(length: string): string {
    return this.convertLengthsToCss(length, 4);
  }

  convertNumberPerHundrerToCss(v: string): string {
    if (!/^[1-9]$/.test(v)) {
      throw new Error(`The value ${v} is not a valid number. It must be any number between 1 to 9`);
    }
  
    return (parseInt(v) * 100).toString();
  }

  getFont(font: string): string {
    if (!this.fonts[font]) {
      throw new Error(`There is not a defined font with the name ${font}`);
    }
    return this.fonts[font];
  }

  getColor(color: string): string {
    if (!this.colors[color]) {
      throw new Error(`There is not a defined color with the name ${color}`);
    }
    return this.colors[color];
  }

  private convertLengthsToCss(lengths: string, quantity: number): string {
    const _lengths = lengths.split("X");
  
    if (quantity != _lengths.length) {
      throw new Error(`The quantities of values in ${lengths} is not valid`);
    }
  
    let output = "";
    _lengths.forEach(u => {
      if (output.length > 0) {
        output += " ";
      }
      output += this.convertLengthToCss(u);
    })
  
    return output;
  }

}