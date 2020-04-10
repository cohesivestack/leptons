import fs from 'fs';
import path from 'path';
import { buildFromPackagesAndClasses, appendCss, buildFromFile } from "./builder";
import { initPackage } from "./default";

describe("Builder", () => {
  test("should create css output", () => {

    const classes = [
      "p-h-1",
      "p-v-2px",
      "p-v-4px-M",
      "p-v-8px-L",
    ];

    const pkg = initPackage({breakpoints: { M: 32, L: 64 }});
    const css = buildFromPackagesAndClasses([pkg], classes);

    expect(css.trim()).toBe(
`.p-h-1 { padding-left: 1rem; padding-right: 1rem; }
.p-v-2px { padding-top: 2px; padding-bottom: 2px; }
@media screen and (min-width: 32rem) {
  .p-v-4px-M { padding-top: 4px; padding-bottom: 4px; }
}
@media screen and (min-width: 64rem) {
  .p-v-8px-L { padding-top: 8px; padding-bottom: 8px; }
}`);

  });

  test("should append css", () => {

    let output = "";
    output = appendCss(output, "Generated classes", ".a { padding: 1px; }");
    output = appendCss(output, "Custom classes", ".b { padding: 2px; }");

    expect(output).toBe(
`/* Generated classes */
.a { padding: 1px; }

/* Custom classes */
.b { padding: 2px; }`
    )
  });

  test("should create css output with prefix", () => {

    const classes = [
      "x-p-h-1",
      "x-p-v-2px",
      "x-p-v-4px-M",
      "x-p-v-8px-L",
    ];

    const pkg = initPackage({breakpoints: {M: 32, L: 64}, prefix: "x" });
    const css = buildFromPackagesAndClasses([pkg], classes);

    expect(css.trim()).toBe(
`.x-p-h-1 { padding-left: 1rem; padding-right: 1rem; }
.x-p-v-2px { padding-top: 2px; padding-bottom: 2px; }
@media screen and (min-width: 32rem) {
  .x-p-v-4px-M { padding-top: 4px; padding-bottom: 4px; }
}
@media screen and (min-width: 64rem) {
  .x-p-v-8px-L { padding-top: 8px; padding-bottom: 8px; }
}`);

  });

  test("should create css from configuration file", async (done) => {
    const configPath = './tmp/leptons.yaml';
    const outputPath = './tmp/index.html';

    if (fs.existsSync(configPath)) fs.unlinkSync(configPath);
    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);

    fs.writeFileSync(outputPath, '<p class="p-10 p-20-M">Text</p>');
    fs.writeFileSync(configPath, `
source:
  - ./tmp/index.html
unit: em
breakpoints:
  M: 48
  L: 64
include: p-r-20 m-l-1`);

  const css = await buildFromFile(configPath);

  expect(css.trim()).toBe(`
/* Generated classes */
.m-l-1 { margin-left: 1em; }
.p-10 { padding: 10em; }
.p-r-20 { padding-right: 20em; }
@media screen and (min-width: 48rem) {
  .p-20-M { padding: 20em; }
}
@media screen and (min-width: 64rem) {
}
`.trim());

  done();

  });

});
