import { Breakpoints } from "./breakpoints";
import { Colors } from "./colors";
import { ConfigModule } from "./config";
import { Atom } from "./atom";

export interface Package {
  readonly name: string;
  readonly breakpoints: Breakpoints;
  readonly colors: Colors;
  readonly prefix?: string;

  getAtom(classParts: string[]): Atom | undefined

  getBreakpoint(symbol: string): number | undefined
}

export interface InitPackage
{
  (breakpoints: Breakpoints, colors: Colors, prefix?: string, modules?: ConfigModule[]): Package
};

export interface GetPackage
{
  (): Package
};