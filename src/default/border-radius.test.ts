import { Builder } from "../builder";

describe("BorderRadius module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "border-radius": [0.5,1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: border-radius */
.br-0_5 { border-radius: 0.5rem; }
.br-1 { border-radius: 1rem; }
.br-circle { border-radius: 100%; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: border-radius - breakpoint: m */
  .br-0_5-m { border-radius: 0.5rem; }
  .br-1-m { border-radius: 1rem; }
  .br-circle-m { border-radius: 100%; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
