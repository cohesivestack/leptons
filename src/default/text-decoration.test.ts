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
.tdu { text-decoration: underline; }
.tds { text-decoration: line-through; }
.tdo { text-decoration: overline; }
.tdn { text-decoration: none; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: text-decoration - breakpoint: m */
  .tdu-m { text-decoration: underline; }
  .tds-m { text-decoration: line-through; }
  .tdo-m { text-decoration: overline; }
  .tdn-m { text-decoration: none; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
