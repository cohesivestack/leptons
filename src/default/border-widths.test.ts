import { Builder } from "../builder";

describe("BorderWidths module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "border-widths": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: border-widths */
.bw-a-0_5 { border-width: 0.5rem; }
.bw-a-1 { border-width: 1rem; }
.bw-t-0_5 { border-top-width: 0.5rem; }
.bw-t-1 { border-top-width: 1rem; }
.bw-b-0_5 { border-bottom-width: 0.5rem; }
.bw-b-1 { border-bottom-width: 1rem; }
.bw-l-0_5 { border-left-width: 0.5rem; }
.bw-l-1 { border-left-width: 1rem; }
.bw-r-0_5 { border-right-width: 0.5rem; }
.bw-r-1 { border-right-width: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: border-widths - breakpoint: m */
  .bw-a-0_5-m { border-width: 0.5rem; }
  .bw-a-1-m { border-width: 1rem; }
  .bw-t-0_5-m { border-top-width: 0.5rem; }
  .bw-t-1-m { border-top-width: 1rem; }
  .bw-b-0_5-m { border-bottom-width: 0.5rem; }
  .bw-b-1-m { border-bottom-width: 1rem; }
  .bw-l-0_5-m { border-left-width: 0.5rem; }
  .bw-l-1-m { border-left-width: 1rem; }
  .bw-r-0_5-m { border-right-width: 0.5rem; }
  .bw-r-1-m { border-right-width: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
