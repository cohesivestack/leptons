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
.bw-a-0_5 { border-style: solid; border-width: 0.5rem; }
.bw-a-1 { border-style: solid; border-width: 1rem; }
.bw-t-0_5 { border-top-style: solid; border-top-width: 0.5rem; }
.bw-t-1 { border-top-style: solid; border-top-width: 1rem; }
.bw-b-0_5 { border-bottom-style: solid; border-bottom-width: 0.5rem; }
.bw-b-1 { border-bottom-style: solid; border-bottom-width: 1rem; }
.bw-l-0_5 { border-left-style: solid; border-left-width: 0.5rem; }
.bw-l-1 { border-left-style: solid; border-left-width: 1rem; }
.bw-r-0_5 { border-right-style: solid; border-right-width: 0.5rem; }
.bw-r-1 { border-right-style: solid; border-right-width: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: border-widths - breakpoint: m */
  .bw-a-0_5-m { border-style: solid; border-width: 0.5rem; }
  .bw-a-1-m { border-style: solid; border-width: 1rem; }
  .bw-t-0_5-m { border-top-style: solid; border-top-width: 0.5rem; }
  .bw-t-1-m { border-top-style: solid; border-top-width: 1rem; }
  .bw-b-0_5-m { border-bottom-style: solid; border-bottom-width: 0.5rem; }
  .bw-b-1-m { border-bottom-style: solid; border-bottom-width: 1rem; }
  .bw-l-0_5-m { border-left-style: solid; border-left-width: 0.5rem; }
  .bw-l-1-m { border-left-style: solid; border-left-width: 1rem; }
  .bw-r-0_5-m { border-right-style: solid; border-right-width: 0.5rem; }
  .bw-r-1-m { border-right-style: solid; border-right-width: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
