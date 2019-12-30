import { Builder } from "../builder";

describe("Margin module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "margin": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: margin */
.ma-auto { margin: auto; }
.ma0_5 { margin: 0.5rem; }
.ma1 { margin: 1rem; }
.mv-auto { margin-top: auto; margin-bottom: auto; }
.mv0_5 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
.mv1 { margin-top: 1rem; margin-bottom: 1rem; }
.mh-auto { margin-left: auto; margin-right: auto; }
.mh0_5 { margin-left: 0.5rem; margin-right: 0.5rem; }
.mh1 { margin-left: 1rem; margin-right: 1rem; }
.mt-auto { margin-top: auto; }
.mt0_5 { margin-top: 0.5rem; }
.mt1 { margin-top: 1rem; }
.mb-auto { margin-bottom: auto; }
.mb0_5 { margin-bottom: 0.5rem; }
.mb1 { margin-bottom: 1rem; }
.ml-auto { margin-left: auto; }
.ml0_5 { margin-left: 0.5rem; }
.ml1 { margin-left: 1rem; }
.mr-auto { margin-right: auto; }
.mr0_5 { margin-right: 0.5rem; }
.mr1 { margin-right: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: margin - breakpoint: m */
  .ma-auto-m { margin: auto; }
  .ma0_5-m { margin: 0.5rem; }
  .ma1-m { margin: 1rem; }
  .mv-auto-m { margin-top: auto; margin-bottom: auto; }
  .mv0_5-m { margin-top: 0.5rem; margin-bottom: 0.5rem; }
  .mv1-m { margin-top: 1rem; margin-bottom: 1rem; }
  .mh-auto-m { margin-left: auto; margin-right: auto; }
  .mh0_5-m { margin-left: 0.5rem; margin-right: 0.5rem; }
  .mh1-m { margin-left: 1rem; margin-right: 1rem; }
  .mt-auto-m { margin-top: auto; }
  .mt0_5-m { margin-top: 0.5rem; }
  .mt1-m { margin-top: 1rem; }
  .mb-auto-m { margin-bottom: auto; }
  .mb0_5-m { margin-bottom: 0.5rem; }
  .mb1-m { margin-bottom: 1rem; }
  .ml-auto-m { margin-left: auto; }
  .ml0_5-m { margin-left: 0.5rem; }
  .ml1-m { margin-left: 1rem; }
  .mr-auto-m { margin-right: auto; }
  .mr0_5-m { margin-right: 0.5rem; }
  .mr1-m { margin-right: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
