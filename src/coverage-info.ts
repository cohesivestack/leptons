import * as defaultModules from "./modules";
import * as coversInfo from "./coverage";

export type CoverageInfo = {
  style: string
  values: string
  skip?: boolean
  skipValues?: string
  covered?: "no" | "partially" | "yes"
  note?: string
  missingValues?: string[]
}

const buildLine = (cover: CoverageInfo, hideMissingValues?: boolean): string => {
  let output = `    ${cover.style}`;
  if (cover.skipValues) {
    output = `${output} ## SKIP: ${cover.skipValues}`
  }
  if (cover.missingValues && cover.missingValues.length > 0 && !hideMissingValues) {
    output = `${output} ## MISSING: ${cover.missingValues?.join("|")}`
  }
  if (cover.note) {
    output = `${output} ## ${cover.note}`
  }
  return `${output}\n`;
}

export const printOutCoverInfo = (filter: string) => {

  const styles = Object.values(defaultModules).flatMap(mod =>mod.getCoveredStyles());
  const covers = Object.values(coversInfo).flat();

  const covered: CoverageInfo[] = [];
  const coveredWithSkip: CoverageInfo[] = [];
  const partially: CoverageInfo[] = [];
  const notCovered: CoverageInfo[] = [];
  const skip: CoverageInfo[] = [];

  covers.forEach(cover => {
    if (cover.skip) {
      skip.push(cover);
    } else {
      const values = cover.values.split("|");
      const skipValues = cover.skipValues?.split("|");
      cover.missingValues = [];

      values.forEach(value => {
        let _value: string;
        switch (value) {
          case "initial":
          case "inherit":
          case "unset":
          case "revert":
            _value = "{keyword}";
            break;
          default:
            _value = value;
        }
        const styleToSearch = `${cover.style}: ${_value};`;

        if (styles.findIndex(s => s === styleToSearch) === -1 &&
            (!skipValues || skipValues.findIndex(sv => sv === value) === -1)) {

          cover.missingValues?.push(value);
        }
      })

      cover.covered = cover.missingValues.length === 0 ?
        "yes" :
        cover.missingValues.length + (skipValues ? skipValues.length : 0) === values.length ?
          "no" :
          "partially";

      switch (cover.covered) {
        case "yes":
          if (cover.skipValues) {
            coveredWithSkip.push(cover);
          } else {
            covered.push(cover);
          }
          break;
        case "no":
          notCovered.push(cover);
          break;
        case "partially":
          partially.push(cover);
          break;
      }
    }
  })

  let output = "\n";
  if (filter === "all" || filter === "covered") {
    output += `  Covered: ${covered.length}\n`;
    covered.forEach(c => output += buildLine(c));
  }

  if (filter === "all" || filter === "covered-with-skip") {
    output += `  Covered with Skip Values: ${coveredWithSkip.length}\n`;
    coveredWithSkip.forEach(c => output += buildLine(c));
  }

  if (filter === "all" || filter === "not-covered") {
    output += `  Not Covered: ${notCovered.length}\n`;
    notCovered.forEach(c => output += buildLine(c, true));
  }

  if (filter === "all" || filter === "partially-covered") {
    output += `  Partially Covered: ${partially.length}\n`;
    partially.forEach(c => output += buildLine(c));
  }

  if (filter === "all" || filter === "skipped") {
    output += `  Skipped: ${skip.length}\n`;
    skip.forEach(c => output += buildLine(c));
  }

  console.log(output)
}