import { Builder } from "../builder";

describe("MinHeight module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "max-height": { rem: [16, 64] } }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: max-height */
.maxh-16 { max-height: 16rem; }
.maxh-64 { max-height: 64rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: max-height - breakpoint: m */
  .maxh-16-m { max-height: 16rem; }
  .maxh-64-m { max-height: 64rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
