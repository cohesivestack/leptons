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
.off { object-fit: fill; }
.ofc { object-fit: contain; }
.of-cover { object-fit: cover; }
.ofs { object-fit: scale-down; }
.ofn { object-fit: none; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: object-fit - breakpoint: m */
  .off-m { object-fit: fill; }
  .ofc-m { object-fit: contain; }
  .of-cover-m { object-fit: cover; }
  .ofs-m { object-fit: scale-down; }
  .ofn-m { object-fit: none; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
