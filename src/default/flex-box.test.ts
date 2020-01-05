import { Builder } from "../builder";

describe('FlexBox module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { 'flex-box': 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: flex-box */
.fba { flex: 1 1 auto; min-width:0; min-height:0; }
.fbn { flex: none; }
.fbc { flex-direction: column; }
.fbr { flex-direction: row; }
.fbw { flex-wrap: wrap; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: flex-box - breakpoint: m */
  .fba-m { flex: 1 1 auto; min-width:0; min-height:0; }
  .fbn-m { flex: none; }
  .fbc-m { flex-direction: column; }
  .fbr-m { flex-direction: row; }
  .fbw-m { flex-wrap: wrap; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
