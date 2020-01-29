import { Builder } from "../builder";

describe("Margin module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "margin": [0.5, 1] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: margin */
.m-a-auto { margin: auto; }
.m-a-0_5 { margin: 0.5rem; }
.m-a-1 { margin: 1rem; }
.m-v-auto { margin-top: auto; margin-bottom: auto; }
.m-v-0_5 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
.m-v-1 { margin-top: 1rem; margin-bottom: 1rem; }
.m-h-auto { margin-left: auto; margin-right: auto; }
.m-h-0_5 { margin-left: 0.5rem; margin-right: 0.5rem; }
.m-h-1 { margin-left: 1rem; margin-right: 1rem; }
.m-t-auto { margin-top: auto; }
.m-t-0_5 { margin-top: 0.5rem; }
.m-t-1 { margin-top: 1rem; }
.m-b-auto { margin-bottom: auto; }
.m-b-0_5 { margin-bottom: 0.5rem; }
.m-b-1 { margin-bottom: 1rem; }
.m-l-auto { margin-left: auto; }
.m-l-0_5 { margin-left: 0.5rem; }
.m-l-1 { margin-left: 1rem; }
.m-r-auto { margin-right: auto; }
.m-r-0_5 { margin-right: 0.5rem; }
.m-r-1 { margin-right: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: margin - breakpoint: m */
  .m-a-auto-m { margin: auto; }
  .m-a-0_5-m { margin: 0.5rem; }
  .m-a-1-m { margin: 1rem; }
  .m-v-auto-m { margin-top: auto; margin-bottom: auto; }
  .m-v-0_5-m { margin-top: 0.5rem; margin-bottom: 0.5rem; }
  .m-v-1-m { margin-top: 1rem; margin-bottom: 1rem; }
  .m-h-auto-m { margin-left: auto; margin-right: auto; }
  .m-h-0_5-m { margin-left: 0.5rem; margin-right: 0.5rem; }
  .m-h-1-m { margin-left: 1rem; margin-right: 1rem; }
  .m-t-auto-m { margin-top: auto; }
  .m-t-0_5-m { margin-top: 0.5rem; }
  .m-t-1-m { margin-top: 1rem; }
  .m-b-auto-m { margin-bottom: auto; }
  .m-b-0_5-m { margin-bottom: 0.5rem; }
  .m-b-1-m { margin-bottom: 1rem; }
  .m-l-auto-m { margin-left: auto; }
  .m-l-0_5-m { margin-left: 0.5rem; }
  .m-l-1-m { margin-left: 1rem; }
  .m-r-auto-m { margin-right: auto; }
  .m-r-0_5-m { margin-right: 0.5rem; }
  .m-r-1-m { margin-right: 1rem; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
