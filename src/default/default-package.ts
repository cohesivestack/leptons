import { Package } from "../package";
import { Module } from "../module";
import { Breakpoints } from "../breakpoints";
import { ConfigModule } from "../config";
import { Atom } from "../atom";
import { Padding } from "./padding";
import { Margin } from "./margin";
import { FlexBox } from "./flex-box";
import { Display } from "./display";

export class DefaultPackage implements Package {
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

  constructor(
    public readonly breakpoints: Breakpoints = {
      M: 48,
      L: 64
    },
    readonly prefix?: string,
    private configModules?: ConfigModule[]) {

    this.modules
      .set('d', new Display())
      .set('p', new Padding())
      .set('m', new Margin())
      .set('fb', new FlexBox());
  }
}