import { Package } from "../package";
import { Module } from "../module";
import { Breakpoints } from "../breakpoints";
import { ConfigModule } from "../config";
import { Padding } from "./padding";
import { Atom } from "../atom";

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

    return mod.getAtom(classParts);
  }

  getBreakpoint(symbol: string): number | undefined {
    return this.breakpoints[symbol];
  }

  constructor(
    public readonly breakpoints: Breakpoints = {
      M: 48,
      L: 64
    },
    private prefix?: string,
    private configModules?: ConfigModule[]) {

    this.modules
      .set('p', new Padding());
  }
}