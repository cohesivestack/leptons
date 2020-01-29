import { Builder } from "../builder";

describe('Display module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { display: 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: display */
.d-n { display: none; }
.d-i { display: inline; }
.d-b { display: block; }
.d-f { display: flex; }
.d-ib { display: inline-block; }
.d-it { display: inline-table; }
.d-t { display: table; }
.d-tr { display: table-row; }
.d-trg { display: table-row-group; }
.d-tc { display: table-column; }
.d-tcg { display: table-column-group; }
.d-t-cell { display: table-cell; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: display - breakpoint: m */
  .d-n-m { display: none; }
  .d-i-m { display: inline; }
  .d-b-m { display: block; }
  .d-f-m { display: flex; }
  .d-ib-m { display: inline-block; }
  .d-it-m { display: inline-table; }
  .d-t-m { display: table; }
  .d-tr-m { display: table-row; }
  .d-trg-m { display: table-row-group; }
  .d-tc-m { display: table-column; }
  .d-tcg-m { display: table-column-group; }
  .d-t-cell-m { display: table-cell; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
