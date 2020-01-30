import { Builder } from "../builder";

describe("LineHeight module", () => {

  test("LineHeight shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "line-height": [1, 1.5] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: line-height */
.lh-1 { line-height: 1; }
.lh-1_5 { line-height: 1.5; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: line-height - breakpoint: m */
  .lh-1-m { line-height: 1; }
  .lh-1_5-m { line-height: 1.5; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
