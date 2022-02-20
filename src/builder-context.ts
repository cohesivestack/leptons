import { Builder } from "./builder";
import { convertLengthToCss } from "./length";


export class BuilderContext {

  constructor(
    private builder: Builder) { }

  convertLengthToCss(length: string): string {
    return convertLengthToCss(length, this.builder.config.lengthType);
  }

  getFont(font: string): string {
    return this.builder.getFont(font);
  }

  getColor(color: string): string {
    return this.builder.getColor(color);
  }
}