import { Builder } from "../builder";

describe('Text module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { "text": 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: text */
.t-a-l { text-align: left; }
.t-a-r { text-align: right; }
.t-a-c { text-align: center; }
.t-a-j { text-align: justify; }
.t-d-u { text-decoration: underline; }
.t-d-s { text-decoration: line-through; }
.t-d-o { text-decoration: overline; }
.t-d-n { text-decoration: none; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: text - breakpoint: m */
  .t-a-l-m { text-align: left; }
  .t-a-r-m { text-align: right; }
  .t-a-c-m { text-align: center; }
  .t-a-j-m { text-align: justify; }
  .t-d-u-m { text-decoration: underline; }
  .t-d-s-m { text-decoration: line-through; }
  .t-d-o-m { text-decoration: overline; }
  .t-d-n-m { text-decoration: none; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
