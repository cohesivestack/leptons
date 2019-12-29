import { Builder } from "../builder";

describe("Builder", () => {

  test("FontSize shoud be created ", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48, l: 64},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1, 1.5] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: font-size */
.f0_5 { font-size: 0.5rem }
.f1 { font-size: 1rem }
.f1_5 { font-size: 1.5rem }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-size - breakpoint: m */
  .f0_5-m { font-size: 0.5rem }
  .f1-m { font-size: 1rem }
  .f1_5-m { font-size: 1.5rem }

}

/* Breakpoint: l */
@media screen and (min-width: 64rem) {

  /* Module: font-size - breakpoint: l */
  .f0_5-l { font-size: 0.5rem }
  .f1-l { font-size: 1rem }
  .f1_5-l { font-size: 1.5rem }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
