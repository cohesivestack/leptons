import { Builder } from "../builder";

describe('BorderColors module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { colors: { black: '#000000', white: '#ffffff' } },
        { 'border-colors': 'default' }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: colors */
.black { color: #000000; }
.white { color: #ffffff; }
/* Module: border-colors */
.bc-black { border-color: #000000; }
.bc-white { border-color: #ffffff; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: colors - breakpoint: m */
  .black-m { color: #000000; }
  .white-m { color: #ffffff; }
  /* Module: border-colors - breakpoint: m */
  .bc-black-m { border-color: #000000; }
  .bc-white-m { border-color: #ffffff; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
