import { Breakpoints } from "./breakpoints";
import { ConfigModule } from "./config";
import { Atom } from "./atom";

export interface Package {
  readonly name: string

  getAtom(classParts: string[]): Atom | null
}

export interface InitPackage
{
  (breakpoints: Breakpoints, prefix?: string, modules?: ConfigModule[]): Package
};

export interface GetPackage
{
  (): Package
};