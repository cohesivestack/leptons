import { Atom } from "./atom";
import { isValidStringKeyword } from "./style";
import { Module } from "./module";
import { ErrorType } from "./error";
import { BuilderContext } from "./builder-context";
import { LengthType } from "./length";
import { Config } from "./config";
import { Media } from "./media";
import { Source, sourceTypes, isSourceWithContent, isSourceWithRegexp, isSourceWithRegexpAndPath } from "./source";
import globby from "globby";
import fs from "fs";
import * as defaultModules from "./modules";
import { pseudoClasses } from "./pseudo-class";
import { pseudoElements } from "./pseudo-element";
import { Dynamic } from "./dynamic";
import { standardColors } from "./color";
import { pseudoRandomBytes } from "crypto";

export class Builder {

  private fonts: { [font: string]: string } = {};
  private colors: { [color: string]: string } = {};
  private urls: { [url: string]: string } = {};
  private shadows: { [shadow: string]: string } = {};
  private animations: { [animation: string]: string } = {};
  private areaTemplate: { [teamplateArea: string]: string } = {};
  private collections: { [collection: string]: { [item: string]: string } } = {};
  private customModules: { [moduleName: string]: Module } = {};
  private modules: { [moduleName: string]: Module } = {};
  private errors: { [errorType: string]: { [className: string]: string } } = {};
  private classesIndex: string[] = [];
  private medias: { [media: string]: Media } = {}
  private context: BuilderContext;
  public readonly lengthType: LengthType;

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

    if (this.config.shadows) {
      Object.entries(this.config.shadows).forEach(([name, shadow]) => {
        this.shadows[name] = shadow;
      })
    }

    if (this.config.animations) {
      Object.entries(this.config.animations).forEach(([name, animation]) => {
        this.animations[name] = animation;
      })
    }

    if (this.config.areaTemplate) {
      Object.entries(this.config.areaTemplate).forEach(([name, templateArea]) => {
        this.areaTemplate[name] = templateArea;
      })
    }

    if (this.config.urls) {
      Object.entries(this.config.urls).forEach(([name, url]) => {
        this.urls[name] = url;
      })
    }

    if (this.config.collections) {
      Object.entries(this.config.collections).forEach(([name, collection]) => {
        this.collections[name] = collection;
      })
    }

    if (initDefaultModules) {
      Object.values(defaultModules).forEach(mod => {
        this.addModule(mod);
      });
    }

    if (this.config.classes) {
      const stylesPerModule: { [moduleName: string]: { [className: string]: string } } = {}
      Object.entries(this.config.classes).forEach(([className, style]) => {
        let parts = className.split('-');

        if (parts.length < 2) {
          throw `The class "${className}" requires at least a Module and Value. Example: module-value`
        }
        const moduleName = parts[0]; parts.shift();
        const attrsAndValues = parts.join("-");
        if (!stylesPerModule[moduleName]) {
          stylesPerModule[moduleName] = {}
        }
        stylesPerModule[moduleName][attrsAndValues] = style;
      })
      Object.entries(stylesPerModule).forEach(([moduleName, styles]) => {
        this.customModules[moduleName] = new Module(`Custom module ${moduleName}`, moduleName, styles, this);
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
        output = output.trimEnd() + "\n" + cssAfter;
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

    const regexClass = /[A-Za-z0-9!][A-Za-z0-9-_\.%:]+/;

    while (attributeMatches = regexAttribute.exec(content)) {
      let entries: null | string[] = null;
      for (let i = 1; i < attributeMatches.length; i++) {
        if (attributeMatches[i]) {
          entries = attributeMatches[i].split(" ");
          break;
        }
      }

      if (entries === null) {
        throw new Error(`Fatal error extracting classes using regexp "${regexAttribute}" with: \n\t${content}`);
      }

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
      this.addError(ErrorType.Marformed, className, e as string);
      return;
    }

    const modules: Module[] = [];

    // Set Leptons module and Custom module.

    // Custom modules have priority, so it's possible to override Leptons classes
    if (this.customModules[<string>atom.module]) {
      modules.push(this.customModules[<string>atom.module]);
    }
    if (this.modules[<string>atom.module]) {
      modules.push(this.modules[<string>atom.module]);
    }
    if (modules.length === 0) {
      this.addError(ErrorType.NotMatching, className, `Module "${atom.module}" doesn't exist`);
      return;
    }

    // Add atom to css styles
    try {
      const cssClassStyle = {
        cssClass: this.atomToCssClass(className, atom),
        cssStyle: this.atomToCssStyle(modules, atom)
      };

      if (!atom.medias) {
        // No media
        this.medias[""].classes[className] = cssClassStyle;
      } else {
        atom.medias.forEach(media => {
          if (!this.medias[media]) {
            this.addError(ErrorType.NotMatching, className, `media "${media}" doesn't exist`);
            return
          }
        });
        atom.medias.forEach(media => {
          this.medias[media].classes[className] = cssClassStyle;
        });
      }
    } catch (e) {
      this.addError(ErrorType.Marformed, className, e as string);
      return;
    }
  }

  public atomToCssClass(className: string, atom: Atom): string  {
    let output = className
      .replace(/\./g, "\\.")
      .replace(/:/g, "\\:")
      .replace(/!/g, "\\!")
      .replace(/%/g, "\\%");

    if (atom.pseudoClasses) {
      atom.pseudoClasses.forEach(pc => output += pseudoClasses[pc]);
    }
    if (atom.pseudoElement) {
      output += pseudoElements[atom.pseudoElement];
    }
    return output;
  }


  public atomToCssStyle(mod: Module | Module[], atom: Atom): string  {

    let modules: Module[];
    if (!(mod instanceof Array)) {
      modules = [mod];
    } else {
      modules = mod;
    }

    let cssStyle: string | undefined;

    let keyModule = atom.attribute ? `${atom.attribute}-${atom.value}` : atom.value;

    // Search in literals
    for (const mod of modules) {
      let literalValue: string | undefined;
      if (literalValue = mod.getLiteral(keyModule)) {
        cssStyle = literalValue;
        break;
      }
    }

    // Search in Keywords
    if (!cssStyle) {
      for (const mod of modules) {
        let keywordStyle: string | undefined;

        const keyModule = atom.attribute || "";

        if ((keywordStyle = mod.getKeyword(keyModule)) && isValidStringKeyword(atom.value)) {
          const template = keywordStyle;
          cssStyle = template.replace(new RegExp("{keyword}", 'g'), atom.value);
          break;
        }
      }
    }

    // Search in Dynamics
    if (!cssStyle) {
      OUT:
      for (const mod of modules) {
        let dynamics: Dynamic[] | undefined;

        const keyModule = atom.attribute || "";

        if (dynamics = mod.getDynamics(keyModule)) {
          for (const d of dynamics) {
            d.setBuilder(this);
            if (d.isMatching(atom.value)) {
              cssStyle = d.parse(atom.value);
              break OUT;
            }
          }
        }
      }
    }

    if (!cssStyle) {
      throw new Error(`Not match any key in the module "${atom.module}"`);
    }

    if (atom.important) {
      cssStyle.split(";").join(" !important;")
    }

    return cssStyle;
  }

  convertNumberPerHundrerToCss(v: string): string {
    if (!/^[1-9]$/.test(v)) {
      throw new Error(`The value ${v} is not a valid number. It must be any number between 1 to 9`);
    }
  
    return (parseInt(v) * 100).toString();
  }

  hasFont(font: string): boolean {
    return !!this.fonts[font];
  }

  getFont(font: string): string {
    if (!this.hasFont(font)) {
      throw new Error(`There is not a defined font with the name ${font}`);
    }
    return this.fonts[font];
  }

  hasColor(color: string): boolean {
    return !!this.colors[color] || !!standardColors[color];
  }

  getColor(color: string): string {
    if (!this.hasColor(color)) {
      throw new Error(`There is not a defined color with the name ${color}`);
    }
    return this.colors[color] || standardColors[color];
  }

  hasCollection(collection: string): boolean {
    return !!this.collections[collection];
  }

  getCollection(collection: string): {[item: string]: string} {
    if (!this.hasCollection(collection)) {
      throw new Error(`There is not a defined collection with the name ${collection}`);
    }
    return this.collections[collection];
  }

  hasUrl(url: string): boolean {
    return !!this.urls[url];
  }

  getUrl(url: string): string {
    if (!this.hasUrl(url)) {
      throw new Error(`There is not a defined url with the name ${url}`);
    }
    return this.urls[url];
  }

  hasAreaTemplate(templateArea: string): boolean {
    return !!this.areaTemplate[templateArea];
  }

  getAreaTemplate(templateArea: string): string {
    if (!this.hasAreaTemplate(templateArea)) {
      throw new Error(`There is not a defined templateArea with the name ${templateArea}`);
    }
    return this.areaTemplate[templateArea];
  }

  hasShadow(shadow: string): boolean {
    return !!this.shadows[shadow];
  }

  getShadow(shadow: string): string {
    if (!this.hasShadow(shadow)) {
      throw new Error(`There is not a defined shadow with the name ${shadow}`);
    }
    return this.shadows[shadow];
  }

  hasAnimation(animation: string): boolean {
    return !!this.animations[animation];
  }

  getAnimation(animation: string): string {
    if (!this.hasAnimation(animation)) {
      throw new Error(`There is not a defined animation with the name ${animation}`);
    }
    return this.animations[animation];
  }
}