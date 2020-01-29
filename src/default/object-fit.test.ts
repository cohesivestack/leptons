import { Builder } from "../builder";

describe('objectFit module', () => {

  test('shoud generate css', () => {

    const plainConfig = {
      breakpoints: {m: 48},
      includeAll: false,
      modules: [ { 'object-fit': 'default' } ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: object-fit */
.of-f { object-fit: fill; }
.of-c { object-fit: contain; }
.of-cover { object-fit: cover; }
.of-sd { object-fit: scale-down; }
.of-n { object-fit: none; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: object-fit - breakpoint: m */
  .of-f-m { object-fit: fill; }
  .of-c-m { object-fit: contain; }
  .of-cover-m { object-fit: cover; }
  .of-sd-m { object-fit: scale-down; }
  .of-n-m { object-fit: none; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
