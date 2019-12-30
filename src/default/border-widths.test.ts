import { Builder } from "../builder";

describe("BorderWidths module", () => {

  test("shoud be created", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "border-widths": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: border-widths */
.bwa05 { border-width: 0.5rem; }
.bwa1 { border-width: 1rem; }
.bwt05 { border-top-width: 0.5rem; }
.bwt1 { border-top-width: 1rem; }
.bwb05 { border-bottom-width: 0.5rem; }
.bwb1 { border-bottom-width: 1rem; }
.bwl05 { border-left-width: 0.5rem; }
.bwl1 { border-left-width: 1rem; }
.bwr05 { border-right-width: 0.5rem; }
.bwr1 { border-right-width: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: border-widths - breakpoint: m */
  .bwa05-m { border-width: 0.5rem; }
  .bwa1-m { border-width: 1rem; }
  .bwt05-m { border-top-width: 0.5rem; }
  .bwt1-m { border-top-width: 1rem; }
  .bwb05-m { border-bottom-width: 0.5rem; }
  .bwb1-m { border-bottom-width: 1rem; }
  .bwl05-m { border-left-width: 0.5rem; }
  .bwl1-m { border-left-width: 1rem; }
  .bwr05-m { border-right-width: 0.5rem; }
  .bwr1-m { border-right-width: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
