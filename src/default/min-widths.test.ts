import { Builder } from "../builder";

describe("MinWidths module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "min-widths": { rem: [16, 64], percentage: [10,100] } }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: min-widths */
.minw-16 { min-width: 16rem; }
.minw-64 { min-width: 64rem; }
.minw-10p { min-width: 10%; }
.minw-100p { min-width: 100%; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: min-widths - breakpoint: m */
  .minw-16-m { min-width: 16rem; }
  .minw-64-m { min-width: 64rem; }
  .minw-10p-m { min-width: 10%; }
  .minw-100p-m { min-width: 100%; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
