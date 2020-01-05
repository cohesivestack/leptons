import { Builder } from "../builder";

describe('BackgroundColors module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { colors: { black: '#000000', white: '#ffffff' } },
        { 'background-colors': 'default' }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: colors */
.black { color: #000000; }
.white { color: #ffffff; }
/* Module: background-colors */
.bgc-black { background-color: #000000; }
.bgc-white { background-color: #ffffff; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: colors - breakpoint: m */
  .black-m { color: #000000; }
  .white-m { color: #ffffff; }
  /* Module: background-colors - breakpoint: m */
  .bgc-black-m { background-color: #000000; }
  .bgc-white-m { background-color: #ffffff; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
