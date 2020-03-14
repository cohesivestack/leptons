import * as Helper from "./builder-helper";
import { isConfigErrors, ConfigError, Config } from "./config";
import { initPackage } from "./default";
import { Media } from "./media";
import { Package } from "./package";

export function build(plainConfig: any): string {

  // Validate config
  if (isConfigErrors(plainConfig)) {
    const errors = plainConfig as ConfigError[];

    let reportErrors = '';
    errors.forEach(e => reportErrors += '  ' + e.path + ' -> ' + e.message + '\n')

    throw Error("Errors parsing plain object:\n" + reportErrors);
  }

  const config = plainConfig as Config;
  const classes = Helper.distinctClasses(Helper.extractClassesFromSource(config.source));
  const defaultPackage = initPackage(config.breakpoints, config.prefix, config.modules);

  // Using only defaultPackage for now. Support for third packages is in the Roadmap

  return buildFromPackagesAndClasses([defaultPackage], classes);
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