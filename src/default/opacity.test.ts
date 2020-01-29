import { Builder } from "../builder";

describe("Opacity module", () => {

  test("Opacity shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "opacity": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: opacity */
.o-0_5 { opacity: 0.5; }
.o-1 { opacity: 1; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: opacity - breakpoint: m */
  .o-0_5-m { opacity: 0.5; }
  .o-1-m { opacity: 1; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
