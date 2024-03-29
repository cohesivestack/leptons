import { Builder } from "./builder";
import { ClassStyle } from "./class-style";
import { Dynamic } from "./dynamic";
import { AtomError } from "./error";
import { Module } from "./module";
import { pseudoClasses } from "./pseudo-class";
import { pseudoElements } from "./pseudo-element";
import { isValidStringKeyword } from "./style";

export class AtomTransformed {
  public medias: {[mediaName: string]: {[className: string]: string}} = {}
}

export class Atom {
  public readonly important?: boolean;
  public readonly module?: string;
  public readonly value: string;
  public readonly attribute?: string;
  public readonly pseudoClasses?: string[];
  public readonly pseudoElement?: string;
  public readonly medias?: string[];

  /**
  * @throws {AtomError}
  */
  constructor(private className: string, private builder: Builder) {

    let parts = className.split('-');

    if (parts.length < 2 && !parts[0].match(/:/)) {
      throw new AtomError(className, "requires at least the Module and Value");
    }

    // MEDIAS
    let part = parts[parts.length - 1];

    // If the last part match with Breakpoints
    // and it doesn't have a pseudo element separator
    if (part.match(/^[A-Z]+$/) && parts.length >=2 && parts[parts.length - 2] != "") {
      this.medias = part.split('');
      parts.splice(-1, 1);
    }

    // PSEUDO ELEMENT
    part = parts[parts.length - 1];

    // If the last part match with Pseudo Elements
    // and it has a pseudo element separator
    if (part.indexOf("::") > -1) {
      let subParts = part.split("::");
      if (subParts.length < 2) {
        throw new AtomError(className, "has a pseudo element with bad format");
      }
      if (subParts[1].length < 1) {
        throw new AtomError(className, "missing pseudo element name");
      }
      this.pseudoElement = subParts[1];
      parts[parts.length - 1] = subParts[0];
    }

    // PSEUDO CLASSES
    part = parts[parts.length - 1];

    // If the last part match with Pseudo Classes
    // and it has a pseudo class separator
    if (part.indexOf(":") > -1) {
      let subParts = part.split(":");
      if (subParts.length < 2) {
        throw new AtomError(className, "has a pseudo format with bad format");
      }
      this.pseudoClasses = [];
      for (let i = 1; i < subParts.length; i++) {
        if (subParts[i].length < 1) {
          throw new AtomError(className, "missing pseudo class name");
        }
        this.pseudoClasses.push(subParts[i]);
      }
      parts[parts.length - 1] = subParts[0];
    }

    if (parts.length < 2) {
      throw new AtomError(className, "requires at least the Module and Value");
    }

    part = parts[0];

    // MODULE
    if (part.match(/^!?[a-z]+$/)) {

      // IMPORTANT
      if (part[0] === "!") {
        this.important = true;
        this.module = part.substr(1);
      } else {
        this.module = part;
      }
      parts.splice(0, 1);
    } else {
      throw new AtomError(className, `has invalid Module characters: "${part}"`);
    }

    // ATTRIBUTE
    if (parts.length === 2) {
      part = parts[0];
      if (part.match(/^[a-z]+$/)) {
        this.attribute = part;
        parts.splice(0, 1);
      } else {
        throw new AtomError(className, `has invalid Attribute characters: "${part}"`);
      }
    }

    // VALUE
    part = parts[0];
    if (part.trim().length === 0) {
      throw new AtomError(className, "has an empty value");
    }

    this.value = part;
    parts.splice(0, 1);

    if (parts.length > 1) {
      throw new AtomError(className, `has invalid class parts: "${parts.join('-')}"`);
    } else if (parts.length === 1) {
      throw new AtomError(className, `has invalid class part: "${part}"`);
    }
  }

  /**
  * @throws {AtomError}
  */
  public transform(isForComponent: boolean = false): { [media: string]: ClassStyle } {

    const modules: Module[] = [];

    // Set Leptons module and Custom module.

    // Custom modules have priority, so it's possible to override Leptons classes
    if (this.builder.hasCustomModule(this.module as string)) {
      modules.push(this.builder.getCustomModule(this.module as string));
    }
    if (this.builder.hasModule(this.module as string)) {
      modules.push(this.builder.getModule(this.module as string));
    }
    if (!isForComponent &&
        !this.medias &&
        !this.pseudoElement &&
        !this.pseudoClasses &&
        this.builder.hasComponentModule(this.module as string)) {
      modules.push(this.builder.getComponentModule(this.module as string));
    }
    if (modules.length === 0) {
      throw new AtomError(this.className, `has an nonexisting module: "${this.module}"`);
    }

    return this.toCss(modules);
  }


  /**
  * @throws {AtomError}
  */
  public toCss(mod: Module | Module[]): { [media: string]: ClassStyle }  {
    let modules: Module[];
    if (!(mod instanceof Array)) {
      modules = [mod];
    } else {
      modules = mod;
    }

    let cssStyle: string | undefined;

    let keyModule = this.attribute ? `${this.attribute}-${this.value}` : this.value;

    let isComponent = false;

    // Search in literals
    for (const mod of modules) {
      let literalValue: string | undefined;
      if (literalValue = mod.getLiteral(keyModule)) {
        cssStyle = literalValue;
        isComponent = mod.hasComponents;
        break;
      }
    }

    // Search in Keywords
    if (!cssStyle) {
      for (const mod of modules) {
        let keywordStyle: string | undefined;

        const keyModule = this.attribute || "";

        if ((keywordStyle = mod.getKeyword(keyModule)) && isValidStringKeyword(this.value)) {
          const template = keywordStyle;
          cssStyle = template.replace(new RegExp("{keyword}", 'g'), this.value);
          isComponent = mod.hasComponents;
          break;
        }
      }
    }

    // Search in Dynamics
    if (!cssStyle) {
      OUT:
      for (const mod of modules) {
        let dynamics: Dynamic[] | undefined;

        const keyModule = this.attribute || "";

        if (dynamics = mod.getDynamics(keyModule)) {
          for (const d of dynamics) {
            d.setBuilder(this.builder as Builder);
            if (d.isMatching(this.value)) {
              isComponent = mod.hasComponents;
              cssStyle = d.parse(this.value, isComponent);
              break OUT;
            }
          }
        }
      }
    }

    if (!cssStyle) {
      throw new AtomError(this.className, `doesn't match any keys in the Module: "${this.module}"`);
    }

    const result: {[media: string]: ClassStyle} = {}

    if (isComponent) {
      const partComponents = cssStyle.split(" ");
      partComponents.forEach(partComponent => {
        const atom = new Atom(partComponent, this.builder);
        const resultPartComponent = atom.transform(true);
        Object.keys(resultPartComponent).forEach(media => {
          if (!result[media]) {
            result[media] = {
              cssClass: this.toCssClass(),
              cssStyle: resultPartComponent[media].cssStyle
            };
          } else {
            result[media].cssStyle = `${result[media].cssStyle} ${resultPartComponent[media].cssStyle}`;
          }
        })
      })
    } else {

      if (this.important) {
        cssStyle = cssStyle.split(";").join(" !important;")
      }

      const className = this.toCssClass();

      if (!this.medias) {
        // No media
        result[""] = {
          cssClass: className,
          cssStyle: cssStyle
        }
      } else {
        this.medias.forEach(media => {
          if (!this.builder.hasMedia(media)) {
            throw new AtomError(this.className, `has a nonexisting Media: "${media}"`);
          }
          result[media] = {
            cssClass: className,
            cssStyle: cssStyle as string
          }
        });
      }
    }


    return result;
  }

  private toCssClass(): string  {
    let output = this.className
      .replace(/\./g, "\\.")
      .replace(/:/g, "\\:")
      .replace(/!/g, "\\!")
      .replace(/%/g, "\\%");

    if (this.pseudoClasses) {
      this.pseudoClasses.forEach(pc => output += pseudoClasses[pc]);
    }
    if (this.pseudoElement) {
      output += pseudoElements[this.pseudoElement];
    }
    return output;
  }
}