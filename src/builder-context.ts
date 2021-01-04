import { Builder } from "./builder";


export class BuilderContext {

  constructor(
    private builder: Builder) { }

  convertLengthToCss(length: string): string {
    return this.builder.convertLengthToCss(length);
  }

  convertLength2ToCss(length: string): string {
    return this.builder.convertLength2ToCss(length);
  }

  convertLength4ToCss(length: string): string {
    return this.builder.convertLength4ToCss(length);
  }

  convertNumberPerHundrerToCss(number: string): string {
    return this.builder.convertNumberPerHundrerToCss(number);
  }

  getFont(font: string): string {
    return this.builder.getFont(font);
  }

  getColor(color: string): string {
    return this.builder.getColor(color);
  }
}