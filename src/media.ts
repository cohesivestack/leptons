import { ClassStyle } from "./class-style";

export class Media {
  constructor(
    public rule: string,
    public classes: { [className: string]: ClassStyle }) {}

  public build(): string {
    let cssString = "";
    let tabSpace = "";

    if (this.rule !== "") {
      cssString += `@media ${this.rule} {\n`;
      tabSpace = "  ";
    }

    Object.keys(this.classes).sort((a,b) => a > b ? 1 : -1 ).forEach(className => {
      let classStyle = this.classes[className];
      cssString += `${tabSpace}.${classStyle.cssClass} { ${classStyle.cssStyle} }\n`
    });

    if (this.rule !== "") {
      cssString += "}\n";
    }

    return cssString;
  }
}