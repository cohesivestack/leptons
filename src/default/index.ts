import { Package } from "../package";
import { Module } from "../module";
import { Breakpoints } from "../breakpoints";
import { ConfigModule } from "../config";
import { Padding } from "./padding";
import { Atom } from "../atom";

export class DefaultPackage implements Package {
  name: string = "default";

  private modules = new Map<string, Module>();
  
  getAtom(classParts: string[]): Atom | null {
    if (this.prefix) {
      if (classParts.length == 0 || classParts[0] !== this.prefix) {
        return null;
      }

      classParts = classParts.slice(1);
    }

    if (classParts.length == 0) {
      return null;
    }

    const mod = this.modules.get(classParts[0]);
    if (!mod) {
      return null;
    }

    return mod.getAtom(classParts);
  }

  constructor(
    private breakpoints: Breakpoints,
    private prefix?: string,
    private configModules?: ConfigModule[]) {

    this.modules
      .set('p', new Padding());
  }
}

let defaultPackage: DefaultPackage | null = null;

export function initPackage(
  breakpoints: Breakpoints,
  prefix?: string,
  modules?: ConfigModule[]): Package {

  return defaultPackage = new DefaultPackage(breakpoints, prefix, modules);
}

export function getPackage(): Package {
  return defaultPackage as Package;
}