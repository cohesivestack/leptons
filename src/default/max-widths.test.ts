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
.mw-16 { max-width: 16rem; }
.mw-64 { max-width: 64rem; }
.mw-10p { max-width: 10%; }
.mw-100p { max-width: 100%; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: max-widths - breakpoint: m */
  .mw-16-m { max-width: 16rem; }
  .mw-64-m { max-width: 64rem; }
  .mw-10p-m { max-width: 10%; }
  .mw-100p-m { max-width: 100%; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
