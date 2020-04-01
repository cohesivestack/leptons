import { Package, ConfigOptions } from "../package";
import { Module } from "../module";
import { Atom } from "../atom";
import { Padding } from "./padding";
import { Margin } from "./margin";
import { FlexBox } from "./flex-box";
import { Display } from "./display";
import { Position } from "./position";
import { Width } from "./width";
import { Background } from "./background";
import { Height } from "./height";
import { _Object } from "./object";
import { Max } from "./max";

export class DefaultPackage extends Package {
  name: string = "default";

  private modules = new Map<string, Module>();
  
  getAtom(classParts: string[]): Atom | undefined {
    if (this.prefix) {
      if (classParts.length == 0 || classParts[0] !== this.prefix) {
        return undefined;
      }

      classParts = classParts.slice(1);
    }

    if (classParts.length == 0) {
      return undefined;
    }

    const mod = this.modules.get(classParts[0]);
    if (!mod) {
      return undefined;
    }

    if (classParts[0] !== mod.symbol) {
      return undefined;
    }

    const cssClass = classParts.join("-");

    classParts = [...classParts];

    let breakpoint: string | undefined;

    if (/^[A-Z]+$/.test(classParts[classParts.length - 1])) {
      breakpoint = classParts.pop();

      if (!this.breakpoints[breakpoint as string]) {
        throw new Error(`The breakpoint ${breakpoint} used in the class ${cssClass} doesn't exists`);
      }
    }

    return mod.getAtom(classParts, cssClass, breakpoint);
  }

  getBreakpoint(symbol: string): number | undefined {
    return this.breakpoints[symbol];
  }

  constructor(config: ConfigOptions) {
    super("default", config);

    this.modules
      .set('bg', new Background(this))
      .set('d', new Display(this))
      .set('fb', new FlexBox(this))
      .set('h', new Height(this))
      .set('m', new Margin(this))
      .set('max', new Max(this))
      .set('obj', new _Object(this))
      .set('p', new Padding(this))
      .set('pos', new Position(this))
      .set('w', new Width(this));
  }
}