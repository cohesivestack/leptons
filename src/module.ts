import { Atom } from "./atom";

export interface Module {
  readonly symbol: string
  getAtom(classParts: string[]): Atom | undefined
}