import { Breakpoints } from "./breakpoints";
import { ConfigModule } from "./config";
import { Atom } from "./atom";

export interface Package {
  readonly name: string
  readonly breakpoints: Breakpoints

  getAtom(classParts: string[]): Atom | undefined

  getBreakpoint(symbol: string): number | undefined
}

export interface InitPackage
{
  (breakpoints: Breakpoints, prefix?: string, modules?: ConfigModule[]): Package
};

export interface GetPackage
{
  (): Package
};