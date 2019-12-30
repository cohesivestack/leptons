import { Builder } from "../builder";

describe("Padding module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "padding": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: padding */
.pa0_5 { padding: 0.5rem; }
.pa1 { padding: 1rem; }
.pv0_5 { padding-top: 0.5; padding-bottom: 0.5rem; }
.pv1 { padding-top: 1; padding-bottom: 1rem; }
.ph0_5 { padding-left: 0.5; padding-right: 0.5rem; }
.ph1 { padding-left: 1; padding-right: 1rem; }
.pt0_5 { padding-top: 0.5rem; }
.pt1 { padding-top: 1rem; }
.pb0_5 { padding-bottom: 0.5rem; }
.pb1 { padding-bottom: 1rem; }
.pl0_5 { padding-left: 0.5rem; }
.pl1 { padding-left: 1rem; }
.pr0_5 { padding-right: 0.5rem; }
.pr1 { padding-right: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: padding - breakpoint: m */
  .pa0_5-m { padding: 0.5rem; }
  .pa1-m { padding: 1rem; }
  .pv0_5-m { padding-top: 0.5; padding-bottom: 0.5rem; }
  .pv1-m { padding-top: 1; padding-bottom: 1rem; }
  .ph0_5-m { padding-left: 0.5; padding-right: 0.5rem; }
  .ph1-m { padding-left: 1; padding-right: 1rem; }
  .pt0_5-m { padding-top: 0.5rem; }
  .pt1-m { padding-top: 1rem; }
  .pb0_5-m { padding-bottom: 0.5rem; }
  .pb1-m { padding-bottom: 1rem; }
  .pl0_5-m { padding-left: 0.5rem; }
  .pl1-m { padding-left: 1rem; }
  .pr0_5-m { padding-right: 0.5rem; }
  .pr1-m { padding-right: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
