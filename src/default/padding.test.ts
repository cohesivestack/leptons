import { Builder } from "../builder";

describe("Padding module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "padding": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: padding */
.p-a-0_5 { padding: 0.5rem; }
.p-a-1 { padding: 1rem; }
.p-v-0_5 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.p-v-1 { padding-top: 1rem; padding-bottom: 1rem; }
.p-h-0_5 { padding-left: 0.5rem; padding-right: 0.5rem; }
.p-h-1 { padding-left: 1rem; padding-right: 1rem; }
.p-t-0_5 { padding-top: 0.5rem; }
.p-t-1 { padding-top: 1rem; }
.p-b-0_5 { padding-bottom: 0.5rem; }
.p-b-1 { padding-bottom: 1rem; }
.p-l-0_5 { padding-left: 0.5rem; }
.p-l-1 { padding-left: 1rem; }
.p-r-0_5 { padding-right: 0.5rem; }
.p-r-1 { padding-right: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: padding - breakpoint: m */
  .p-a-0_5-m { padding: 0.5rem; }
  .p-a-1-m { padding: 1rem; }
  .p-v-0_5-m { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .p-v-1-m { padding-top: 1rem; padding-bottom: 1rem; }
  .p-h-0_5-m { padding-left: 0.5rem; padding-right: 0.5rem; }
  .p-h-1-m { padding-left: 1rem; padding-right: 1rem; }
  .p-t-0_5-m { padding-top: 0.5rem; }
  .p-t-1-m { padding-top: 1rem; }
  .p-b-0_5-m { padding-bottom: 0.5rem; }
  .p-b-1-m { padding-bottom: 1rem; }
  .p-l-0_5-m { padding-left: 0.5rem; }
  .p-l-1-m { padding-left: 1rem; }
  .p-r-0_5-m { padding-right: 0.5rem; }
  .p-r-1-m { padding-right: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
