import { Builder } from "../builder";

describe("ZIndex module", () => {

  test("zIndex shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "z-index": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: z-index */
.z-0_5 { z-index: 0.5; }
.z-1 { z-index: 1; }
.z-max { z-index: 2147483647; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: z-index - breakpoint: m */
  .z-0_5-m { z-index: 0.5; }
  .z-1-m { z-index: 1; }
  .z-max-m { z-index: 2147483647; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
