import { Builder } from "../builder";

describe("Heights module", () => {

  test("shoud generate css", () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { heights: { rem: [16, 64], percentage: [10,100] } }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: heights */
.h16 { height: 16rem; }
.h64 { height: 64rem; }
.h10p { height: 10%; }
.h100p { height: 100%; }
.h10vh { height: 10vh; }
.h100vh { height: 100vh; }
.h-auto { height: auto; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: heights - breakpoint: m */
  .h16-m { height: 16rem; }
  .h64-m { height: 64rem; }
  .h10p-m { height: 10%; }
  .h100p-m { height: 100%; }
  .h10vh-m { height: 10vh; }
  .h100vh-m { height: 100vh; }
  .h-auto-m { height: auto; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
