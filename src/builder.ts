import { Atom } from "./atom";
import { StyleItemFunc, StyleFunc } from "./style";
import { Module } from "./module";
import { ErrorType } from "./error";
import { BuilderContext } from "./builder-context";
import { isLengthValid, LengthType } from "./length";
import { Config } from "./config";
import { Media } from "./media";
import { Source, sourceTypes, isSourceWithContent, isSourceWithRegexp, isSourceWithRegexpAndPath } from "./source";
import globby from "globby";
import fs from "fs";
import * as defaultModules from "./modules";

export class Builder {

  private fonts: { [font: string]: string } = {};
  private colors: { [color: string]: string } = {};
  private modules: { [moduleName: string]: Module } = {};
  private errors: { [errorType: string]: { [className: string]: string } } = {};
  private classesIndex: string[] = [];
  private medias: { [media: string]: Media } = {}
  private context: BuilderContext;
  private lengthType: LengthType;

  constructor(public readonly config: Config = {}, initDefaultModules: boolean = false) {

    this.context = new BuilderContext(this);
    this.lengthType = this.config.lengthType || LengthType.Rem;

    this.medias[""] = new Media("", {});

    if (this.config.medias) {
      Object.entries(this.config.medias).forEach(([name, rule]) => {
        this.medias[name] = new Media(rule, {})
      })
    }

    if (this.config.colors) {
      Object.entries(this.config.colors).forEach(([name, colorValue]) => {
        this.colors[name] = colorValue;
      })
    }

    if (this.config.fonts) {
      Object.entries(this.config.fonts).forEach(([name, fontFamily]) => {
        this.fonts[name] = fontFamily;
      })
    }

    if (initDefaultModules) {
      Object.values(defaultModules).forEach(mod => {
        this.addModule(mod);
      });
    }
  }

  public buildToString(): string {
    let classes = Builder.extractClassesFromSource(this.config.source);
    if (this.config.include) {
      classes = classes.concat(this.config.include.split(/\s+/));
    }

    // Distinct classes
    classes = [...new Set(classes)];

    classes.forEach(c => this.addClassName(c));

    let output = "";

    if (this.config.cssBefore) {
      const cssBefore = this.config.cssBefore.trim()
      if (cssBefore.length > 0) {
        output += cssBefore + "\n"
      }
    }

    Object.values(this.medias).forEach(media => {
      output += media.build();
    });

    if (this.config.cssAfter) {
      const cssAfter = this.config.cssAfter.trim()
      if (cssAfter.length > 0) {
        output = output.trimRight() + "\n" + cssAfter;
      }
    }

    return output;
  }

  public buildToFile() {
    fs.writeFileSync(this.config.output || "leptons.css", this.buildToString());
  }

  public static extractClassesFromSource(source?: Source): string[] {
    const _source: Source = source ? source : {"html": "**/*.html"}
    const classes: string[] = [];

    Object.keys(_source).forEach(sourceName => {
      const sourcePaths: string[] = [];
      let regexp: RegExp;

      if (isSourceWithRegexp(_source, sourceName)) {
        const sourceWithRegexp = (_source[sourceName] as any);
        regexp = new RegExp(sourceWithRegexp.regexp as string, "g");
      } else {
        if (!sourceTypes[sourceName]) {
          throw new Error(
            `The source ${sourceName} is not a valid predetermined source name. Only "html" and "react" are valid predefined source names. Use a custom source rather`);
        }

        regexp = new RegExp(sourceTypes[sourceName]);
      }

      if (isSourceWithContent(_source, sourceName)) {

        const sourceWithContent = (_source[sourceName] as any);
        classes.push(...Builder.extractClassesFromContent(sourceWithContent.content, regexp));

      } else {

        if (isSourceWithRegexpAndPath(_source, sourceName)) {

          const sourceWithRegexpAndPath = (_source[sourceName] as any);
          if (Array.isArray(sourceWithRegexpAndPath.path)) {
            sourcePaths.push(...sourceWithRegexpAndPath.path as string[]);
          } else {
            sourcePaths.push(sourceWithRegexpAndPath.path as string);
          }

        } else {

          if (Array.isArray(_source[sourceName])) {
            sourcePaths.push(..._source[sourceName] as string[]);
          } else {
            sourcePaths.push(_source[sourceName] as string);
          }

        }

        globby
          .sync(sourcePaths)
          .forEach(f => classes.push(...Builder.extractClassesFromFile(f, regexp)));
      }

    });

    return classes;
  }

  public static extractClassesFromContent(content: string, regexAttribute: RegExp): string[] {
    let attributeMatches: RegExpExecArray | null;
    const classNames: string[] = [];

    const regexClass = /^[A-Za-z0-9-_\.:]+$/;

    while (attributeMatches = regexAttribute.exec(content)) {
      const entries = attributeMatches[1].split(" ");

      for (let i = 0; i < entries.length; i++) {
        let classMatch = regexClass.exec(entries[i]);
        if (classMatch) {
          classNames.push(classMatch[0]);
        }
      }
    }

    return classNames;
  }

  public static extractClassesFromFile(file: string, regexp: RegExp): string[] {
    return Builder.extractClassesFromContent(fs.readFileSync(file, "utf8"), regexp);
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
        this.medias[""].classes[className] = cssStyle;
      } else {
        atom.medias.forEach(media => {
          if (!this.medias[media]) {
            this.addError(ErrorType.NotMatching, className, `media "${media}" doesn't exist`);
            return
          }
        });
        atom.medias.forEach(media => {
          this.medias[media].classes[className] = cssStyle;
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
      } else {
        keyModule = "";
      }

      if (item = mod.getItem(keyModule)) {

        const template = item.style;
        cssStyle = template.replace(new RegExp(`{${item.itemName}}`, 'g'), this.parseItemValue(item.itemName, atom));

      } else if (itemFunction = mod.getItemFunction(keyModule)) {

        const template = itemFunction.style[0];
        const func = itemFunction.style[1];
        cssStyle = template.replace(
          new RegExp(`{${itemFunction.itemName}}`, 'g'),
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
  
    let value = length;
  
    if (/^[0-9]+(\.[0-9]+)?$/.test(length)) {
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