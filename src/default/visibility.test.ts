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
.v-v { visibility: visible; }
.v-h { visibility: hidden; }
.v-c { visibility: collapse; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: visibility - breakpoint: m */
  .v-v-m { visibility: visible; }
  .v-h-m { visibility: hidden; }
  .v-c-m { visibility: collapse; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
