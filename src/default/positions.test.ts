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
.top-0_5 { top: 0.5rem; }
.top-1 { top: 1rem; }
.bottom-0_5 { bottom: 0.5rem; }
.bottom-1 { bottom: 1rem; }
.left-0_5 { left: 0.5rem; }
.left-1 { left: 1rem; }
.right-0_5 { right: 0.5rem; }
.right-1 { right: 1rem; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.relative { position: relative; }
.static { position: static; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: positions - breakpoint: m */
  .top-0_5-m { top: 0.5rem; }
  .top-1-m { top: 1rem; }
  .bottom-0_5-m { bottom: 0.5rem; }
  .bottom-1-m { bottom: 1rem; }
  .left-0_5-m { left: 0.5rem; }
  .left-1-m { left: 1rem; }
  .right-0_5-m { right: 0.5rem; }
  .right-1-m { right: 1rem; }
  .absolute-m { position: absolute; }
  .fixed-m { position: fixed; }
  .relative-m { position: relative; }
  .static-m { position: static; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
