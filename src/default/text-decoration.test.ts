import { Builder } from "../builder";

describe('TextDecoration module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { "text-decoration": 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: text-decoration */
.td-u { text-decoration: underline; }
.td-s { text-decoration: line-through; }
.td-o { text-decoration: overline; }
.td-n { text-decoration: none; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: text-decoration - breakpoint: m */
  .td-u-m { text-decoration: underline; }
  .td-s-m { text-decoration: line-through; }
  .td-o-m { text-decoration: overline; }
  .td-n-m { text-decoration: none; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
