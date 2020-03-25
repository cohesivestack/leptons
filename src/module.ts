import { Atom } from "./atom";

export interface Module {
  readonly symbol: string
  getAtom(classParts: string[], cssClass: string, breakpoint?: string): Atom | undefined
}