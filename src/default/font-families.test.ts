import { Builder } from "../builder";

describe('FontFamilies module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { 'font-families':
          {
            arial: 'arial',
            times: '"times new roman"'
          }
        }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: font-families */
.arial { font-family: arial; }
.times { font-family: "times new roman"; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-families - breakpoint: m */
  .arial-m { font-family: arial; }
  .times-m { font-family: "times new roman"; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
