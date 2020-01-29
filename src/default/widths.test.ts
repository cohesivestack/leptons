import { Builder } from "../builder";

describe("Widths module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { widths: { rem: [16, 64], percentage: [10,100] } }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: widths */
.w-16 { width: 16rem; }
.w-64 { width: 64rem; }
.w-10p { width: 10%; }
.w-100p { width: 100%; }
.w-auto { width: auto; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: widths - breakpoint: m */
  .w-16-m { width: 16rem; }
  .w-64-m { width: 64rem; }
  .w-10p-m { width: 10%; }
  .w-100p-m { width: 100%; }
  .w-auto-m { width: auto; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
