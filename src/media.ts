export class Media {
  constructor(
    public rule: string,
    public classes: { [className: string]: string }) {}

  public build(): string {
    let cssString = "";
    let tabSpace = "";

    if (this.rule !== "") {
      cssString += `@media ${this.rule} {\n`;
      tabSpace = "  ";
    }


    Object.keys(this.classes).sort((a,b) => a > b ? 1 : -1 ).forEach(className => {
      let cssStyle = this.classes[className];
      let cssClassName = className.replace(/\./g, "\\.");
      cssClassName = className.replace(/:/g, "\\:");
      cssString += `${tabSpace}.${className} { ${cssStyle} }\n`
    });

    if (this.rule !== "") {
      cssString += "}\n";
    }

    return cssString;
  }
}