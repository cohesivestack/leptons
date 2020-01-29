import { Builder } from "../builder";

describe("FontWeights module", () => {

  test("FontWeights shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "font-weights": [3,7] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: font-weights */
.fw-3 { font-weight: 300; }
.fw-7 { font-weight: 700; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-weights - breakpoint: m */
  .fw-3-m { font-weight: 300; }
  .fw-7-m { font-weight: 700; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
