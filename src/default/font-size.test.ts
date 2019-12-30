import { Builder } from "../builder";

describe("FontSize module", () => {

  test("FontSize shoud generate css", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: font-size */
.f05 { font-size: 0.5rem; }
.f1 { font-size: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-size - breakpoint: m */
  .f05-m { font-size: 0.5rem; }
  .f1-m { font-size: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
