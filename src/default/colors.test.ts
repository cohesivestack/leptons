import { Builder } from "../builder";

describe('Colors module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { colors:
          {
            black: '#000000',
            white: '#ffffff'
          }
        }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    const expectedOutput = `
/* Module: colors */
.black { color: #000000; }
.white { color: #ffffff; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: colors - breakpoint: m */
  .black-m { color: #000000; }
  .white-m { color: #ffffff; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
