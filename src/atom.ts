import { Package } from "./package";
import { Module } from "./module";

export class Atom {
  public readonly package: Package;

  constructor(
    _package: Package,
    public readonly module: Module,
    public readonly cssClass: string,
    public readonly cssValue: string,
    public readonly attribute: string | null,
    public readonly value: string | null) {

    this.package = _package;
  }
}