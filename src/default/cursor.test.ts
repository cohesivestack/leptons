import { Builder } from "../builder";

describe('Cursors module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { cursors: 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: cursors */
.pointer { cursor: pointer; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: cursors - breakpoint: m */
  .pointer-m { cursor: pointer; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
