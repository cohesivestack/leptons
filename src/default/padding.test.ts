import { Builder } from "../builder";

describe("Builder", () => {

  test("Padding shoud be created ", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48, l: 64},
      includeAll: false,
      modules: [
        { "padding": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: padding */
.pa0_5 { padding: 0.5; }
.pa1 { padding: 1; }
.pv0_5 { padding-top: 0.5; padding-bottom: 0.5; }
.pv1 { padding-top: 1; padding-bottom: 1; }
.ph0_5 { padding-left: 0.5; padding-right: 0.5; }
.ph1 { padding-left: 1; padding-right: 1; }
.pt0_5 { padding-top: 0.5; }
.pt1 { padding-top: 1; }
.pb0_5 { padding-bottom: 0.5; }
.pb1 { padding-bottom: 1; }
.pl0_5 { padding-left: 0.5; }
.pl1 { padding-left: 1; }
.pr0_5 { padding-right: 0.5; }
.pr1 { padding-right: 1; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: padding - breakpoint: m */
  .pa0_5-m { padding: 0.5; }
  .pa1-m { padding: 1; }
  .pv0_5-m { padding-top: 0.5; padding-bottom: 0.5; }
  .pv1-m { padding-top: 1; padding-bottom: 1; }
  .ph0_5-m { padding-left: 0.5; padding-right: 0.5; }
  .ph1-m { padding-left: 1; padding-right: 1; }
  .pt0_5-m { padding-top: 0.5; }
  .pt1-m { padding-top: 1; }
  .pb0_5-m { padding-bottom: 0.5; }
  .pb1-m { padding-bottom: 1; }
  .pl0_5-m { padding-left: 0.5; }
  .pl1-m { padding-left: 1; }
  .pr0_5-m { padding-right: 0.5; }
  .pr1-m { padding-right: 1; }

}

/* Breakpoint: l */
@media screen and (min-width: 64rem) {

  /* Module: padding - breakpoint: l */
  .pa0_5-l { padding: 0.5; }
  .pa1-l { padding: 1; }
  .pv0_5-l { padding-top: 0.5; padding-bottom: 0.5; }
  .pv1-l { padding-top: 1; padding-bottom: 1; }
  .ph0_5-l { padding-left: 0.5; padding-right: 0.5; }
  .ph1-l { padding-left: 1; padding-right: 1; }
  .pt0_5-l { padding-top: 0.5; }
  .pt1-l { padding-top: 1; }
  .pb0_5-l { padding-bottom: 0.5; }
  .pb1-l { padding-bottom: 1; }
  .pl0_5-l { padding-left: 0.5; }
  .pl1-l { padding-left: 1; }
  .pr0_5-l { padding-right: 0.5; }
  .pr1-l { padding-right: 1; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
