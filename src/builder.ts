import fs from 'fs';
import * as Helper from "./builder-helper";
import { isConfigErrors, ConfigError, Config, parseFromJson, parseFromYaml, parseFromFile } from "./config";
import { initPackage } from "./default";
import { Media } from "./media";
import { Package } from "./package";

export function buildFromYaml(yamlConfig: string): string {
  return build(parseFromYaml(yamlConfig));
}

export function buildFromJson(jsonConfig: string): string {
  return build(parseFromJson(jsonConfig));
}

export function buildFromFile(filePath: string): string {
  return build(parseFromFile(filePath));
}

export function build(plainConfig: any): string {

  // Validate config
  if (isConfigErrors(plainConfig)) {
    const errors = plainConfig as ConfigError[];

    let reportErrors = '';
    errors.forEach(e => reportErrors += '  ' + e.path + ' -> ' + e.message + '\n')

    throw Error("Errors parsing plain object:\n" + reportErrors);
  }

  const config = plainConfig as Config;

  let classesToExtract = Helper.extractClassesFromSource(config.source);
  if (config.include) {
    classesToExtract = classesToExtract.concat(config.include.split(" "));
  }
  
  const classes = Helper.distinctClasses(classesToExtract);
  const defaultPackage = initPackage({
    breakpoints: config.breakpoints,
    colors: config.colors,
    fonts: config.fonts,
    prefix: config.prefix,
    unit: config.unit
  });

  // Using only defaultPackage for now. Support for third packages is in the Roadmap

  let output = "";
  
  output = appendCss(
    output,
    "Generated classes",
    buildFromPackagesAndClasses([defaultPackage], classes));

  if (config.css) {
    output = appendCss(output, "Custom CSS", config.css);
  }

  return output;
}

export function appendCss(output: string, title: string, css: string): string {
  if (!output) {
    output = "";
  }

  if (output.length > 0) {
    output += "\n\n";
  }

  output += `/* ${title} */\n`;
  output += css;

  return output;
}

export function buildFromPackagesAndClasses(packages: Package[], classes: string[]): string {

  const packageMedias = new Map<Package, Map<string | undefined, Media>>();

  packages.forEach(pkg => {
    const medias = new Map<string | undefined, Media>();
    medias.set(undefined, new Media(pkg));

    Object
      .keys(pkg.breakpoints)
      .forEach(name => medias.set(name, new Media(pkg, name)));

      packageMedias.set(pkg, medias);
  });

  classes.forEach(className => {
    packages.forEach(pkg => {
      const atom = pkg.getAtom(className.split("-"));
      if (atom) {
        packageMedias.get(pkg)?.get(atom.breakpoint)?.addAtom(atom);
      }
    });
  });

  let cssString = "";
  packages.forEach(pkg => {
    packageMedias.get(pkg)?.forEach(media => cssString += media.build());
  });

  return cssString;
}

export function writeToFile(outputFilePath: string, cssContent: string) {
  fs.writeFileSync(outputFilePath, cssContent);
}

export class Builder {
  public convertUnitToCss(unit: string): string {
    return "";
    //return convertUnitToCss(unit, this.pkg.unit);
  }

  public convertUnitsToCss(units: string, lengths?: number[]): string {
    return "";
    //return convertUnitsToCss(units, this.pkg.unit, lengths);
  }

  public getColor(color: string): string {
    return "";
    // if (!this.pkg.colors[color]) {
    //   throw new Error(`The color ${color} is not valid`);
    // }
    // return this.pkg.colors[color];
  }

  public getFontFamily(font: string): string {
    return "";
    // if (!this.pkg.fonts[font]) {
    //   throw new Error(`The font family ${font} is not valid`);
    // }
    // return this.pkg.fonts[font];
  }
}