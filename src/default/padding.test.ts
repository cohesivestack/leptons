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
.pa05 { padding: 0.5; }
.pa1 { padding: 1; }
.pv05 { padding-top: 0.5; padding-bottom: 0.5; }
.pv1 { padding-top: 1; padding-bottom: 1; }
.ph05 { padding-left: 0.5; padding-right: 0.5; }
.ph1 { padding-left: 1; padding-right: 1; }
.pt05 { padding-top: 0.5; }
.pt1 { padding-top: 1; }
.pb05 { padding-bottom: 0.5; }
.pb1 { padding-bottom: 1; }
.pl05 { padding-left: 0.5; }
.pl1 { padding-left: 1; }
.pr05 { padding-right: 0.5; }
.pr1 { padding-right: 1; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: padding - breakpoint: m */
  .pa05-m { padding: 0.5; }
  .pa1-m { padding: 1; }
  .pv05-m { padding-top: 0.5; padding-bottom: 0.5; }
  .pv1-m { padding-top: 1; padding-bottom: 1; }
  .ph05-m { padding-left: 0.5; padding-right: 0.5; }
  .ph1-m { padding-left: 1; padding-right: 1; }
  .pt05-m { padding-top: 0.5; }
  .pt1-m { padding-top: 1; }
  .pb05-m { padding-bottom: 0.5; }
  .pb1-m { padding-bottom: 1; }
  .pl05-m { padding-left: 0.5; }
  .pl1-m { padding-left: 1; }
  .pr05-m { padding-right: 0.5; }
  .pr1-m { padding-right: 1; }

}

/* Breakpoint: l */
@media screen and (min-width: 64rem) {

  /* Module: padding - breakpoint: l */
  .pa05-l { padding: 0.5; }
  .pa1-l { padding: 1; }
  .pv05-l { padding-top: 0.5; padding-bottom: 0.5; }
  .pv1-l { padding-top: 1; padding-bottom: 1; }
  .ph05-l { padding-left: 0.5; padding-right: 0.5; }
  .ph1-l { padding-left: 1; padding-right: 1; }
  .pt05-l { padding-top: 0.5; }
  .pt1-l { padding-top: 1; }
  .pb05-l { padding-bottom: 0.5; }
  .pb1-l { padding-bottom: 1; }
  .pl05-l { padding-left: 0.5; }
  .pl1-l { padding-left: 1; }
  .pr05-l { padding-right: 0.5; }
  .pr1-l { padding-right: 1; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
