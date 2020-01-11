import { Builder } from "../builder";

describe('Visibility module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { visibility: 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: visibility */
.vv { visibility: visible; }
.vh { visibility: hidden; }
.vc { visibility: collapse; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: visibility - breakpoint: m */
  .vv-m { visibility: visible; }
  .vh-m { visibility: hidden; }
  .vc-m { visibility: collapse; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
