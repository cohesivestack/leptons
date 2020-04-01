import { buildFromPackagesAndClasses, appendCss } from "./builder";
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

});
