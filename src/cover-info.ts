import * as defaultModules from "./modules";
import * as coversInfo from "./cover";

export type CoverInfo = {
  style: string
  values: string
  skip?: boolean
  skipValues?: string
  covered?: "no" | "partially" | "yes"
  missingValues?: string[]
}

export const printOutCoverInfo = () => {

  const styles = Object.values(defaultModules).flatMap(mod =>mod.getCoveredStyles());
  const covers = Object.values(coversInfo).flat();

  const covered: CoverInfo[] = [];
  const partially: CoverInfo[] = [];
  const notCovered: CoverInfo[] = [];
  const skip: CoverInfo[] = [];

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
          covered.push(cover);
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

  console.log();
  console.log(`  Total Styles Covered: ${covered.length}`);

  console.log(`  Not Covered: ${notCovered.length}`);
  notCovered.forEach(c => console.log(`    ${c.style}`));

  console.log(`  Partially Covered: ${partially.length}`);
  partially.forEach(c => console.log(`    ${c.style}: ${c.missingValues?.join("|")}`));

  console.log(`  Skip: ${skip.length}`);
  skip.forEach(c => console.log(`    ${c.style}`));
}