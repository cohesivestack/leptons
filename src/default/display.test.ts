import { Builder } from "../builder";

describe('Display module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { display: 'default' } ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: display */
.dn { display: none; }
.di { display: inline; }
.db { display: block; }
.dib { display: inline-block; }
.dit { display: inline-table; }
.dt { display: table; }
.dtr { display: table-row; }
.dtrg { display: table-row-group; }
.dtc { display: table-column; }
.dtcg { display: table-column-group; }
.dt-cell { display: table-cell; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: display - breakpoint: m */
  .dn-m { display: none; }
  .di-m { display: inline; }
  .db-m { display: block; }
  .dib-m { display: inline-block; }
  .dit-m { display: inline-table; }
  .dt-m { display: table; }
  .dtr-m { display: table-row; }
  .dtrg-m { display: table-row-group; }
  .dtc-m { display: table-column; }
  .dtcg-m { display: table-column-group; }
  .dt-cell-m { display: table-cell; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
