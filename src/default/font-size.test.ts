import { Builder } from "../builder";

describe("FontSize module", () => {

  test("FontSize shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: font-size */
.fs-0_5 { font-size: 0.5rem; }
.fs-1 { font-size: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-size - breakpoint: m */
  .fs-0_5-m { font-size: 0.5rem; }
  .fs-1-m { font-size: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
