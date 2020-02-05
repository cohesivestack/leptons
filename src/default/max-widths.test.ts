import { Builder } from "../builder";

describe("MaxWidths module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "max-widths": { rem: [16, 64], percentage: [10,100] } }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: max-widths */
.maxw-16 { max-width: 16rem; }
.maxw-64 { max-width: 64rem; }
.maxw-10p { max-width: 10%; }
.maxw-100p { max-width: 100%; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: max-widths - breakpoint: m */
  .maxw-16-m { max-width: 16rem; }
  .maxw-64-m { max-width: 64rem; }
  .maxw-10p-m { max-width: 10%; }
  .maxw-100p-m { max-width: 100%; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
