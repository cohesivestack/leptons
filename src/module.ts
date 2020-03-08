import { Atom } from "./atom";

export interface Module {
  getAtom(classParts: string[]): Atom | null
}