import { Builder } from "../builder";

describe("MinHeight module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "min-height": { rem: [16, 64] } }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: min-height */
.mh-16 { min-height: 16rem; }
.mh-64 { min-height: 64rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: min-height - breakpoint: m */
  .mh-16-m { min-height: 16rem; }
  .mh-64-m { min-height: 64rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
