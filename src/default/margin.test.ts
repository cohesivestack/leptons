import { Builder } from "../builder";

describe("Margin module", () => {

  test("shoud be created ", () => {

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
.ma05 { margin: 0.5; }
.ma1 { margin: 1; }
.mv-auto { margin-top: auto; margin-bottom: auto; }
.mv05 { margin-top: 0.5; margin-bottom: 0.5; }
.mv1 { margin-top: 1; margin-bottom: 1; }
.mh-auto { margin-left: auto; margin-right: auto; }
.mh05 { margin-left: 0.5; margin-right: 0.5; }
.mh1 { margin-left: 1; margin-right: 1; }
.mt-auto { margin-top: auto; }
.mt05 { margin-top: 0.5; }
.mt1 { margin-top: 1; }
.mb-auto { margin-bottom: auto; }
.mb05 { margin-bottom: 0.5; }
.mb1 { margin-bottom: 1; }
.ml-auto { margin-left: auto; }
.ml05 { margin-left: 0.5; }
.ml1 { margin-left: 1; }
.mr-auto { margin-right: auto; }
.mr05 { margin-right: 0.5; }
.mr1 { margin-right: 1; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: margin - breakpoint: m */
  .ma-auto-m { margin: auto; }
  .ma05-m { margin: 0.5; }
  .ma1-m { margin: 1; }
  .mv-auto-m { margin-top: auto; margin-bottom: auto; }
  .mv05-m { margin-top: 0.5; margin-bottom: 0.5; }
  .mv1-m { margin-top: 1; margin-bottom: 1; }
  .mh-auto-m { margin-left: auto; margin-right: auto; }
  .mh05-m { margin-left: 0.5; margin-right: 0.5; }
  .mh1-m { margin-left: 1; margin-right: 1; }
  .mt-auto-m { margin-top: auto; }
  .mt05-m { margin-top: 0.5; }
  .mt1-m { margin-top: 1; }
  .mb-auto-m { margin-bottom: auto; }
  .mb05-m { margin-bottom: 0.5; }
  .mb1-m { margin-bottom: 1; }
  .ml-auto-m { margin-left: auto; }
  .ml05-m { margin-left: 0.5; }
  .ml1-m { margin-left: 1; }
  .mr-auto-m { margin-right: auto; }
  .mr05-m { margin-right: 0.5; }
  .mr1-m { margin-right: 1; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
