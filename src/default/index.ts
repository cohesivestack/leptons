import { Package } from "../package";
import { Breakpoints } from "../breakpoints";
import { ConfigModule } from "../config";
import { DefaultPackage } from "./default-package";

let defaultPackage: DefaultPackage | null = null;

export function initPackage(
  breakpoints?: Breakpoints,
  prefix?: string,
  modules?: ConfigModule[]): Package {

  return defaultPackage = new DefaultPackage(breakpoints, prefix, modules);
}

export function getPackage(): Package {
  return defaultPackage as Package;
}