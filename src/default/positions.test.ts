import { Builder } from "../builder";

describe('Positions module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { positions: [0.5, 1] } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: positions */
.pos-t-0_5 { top: 0.5rem; }
.pos-t-1 { top: 1rem; }
.pos-b-0_5 { bottom: 0.5rem; }
.pos-b-1 { bottom: 1rem; }
.pos-l-0_5 { left: 0.5rem; }
.pos-l-1 { left: 1rem; }
.pos-r-0_5 { right: 0.5rem; }
.pos-r-1 { right: 1rem; }
.pos-absolute { position: absolute; }
.pos-fixed { position: fixed; }
.pos-relative { position: relative; }
.pos-static { position: static; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: positions - breakpoint: m */
  .pos-t-0_5-m { top: 0.5rem; }
  .pos-t-1-m { top: 1rem; }
  .pos-b-0_5-m { bottom: 0.5rem; }
  .pos-b-1-m { bottom: 1rem; }
  .pos-l-0_5-m { left: 0.5rem; }
  .pos-l-1-m { left: 1rem; }
  .pos-r-0_5-m { right: 0.5rem; }
  .pos-r-1-m { right: 1rem; }
  .pos-absolute-m { position: absolute; }
  .pos-fixed-m { position: fixed; }
  .pos-relative-m { position: relative; }
  .pos-static-m { position: static; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
