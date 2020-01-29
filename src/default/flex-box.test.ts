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
.fb-a { flex: 1 1 auto; min-width:0; min-height:0; }
.fb-n { flex: none; }
.fb-c { flex-direction: column; }
.fb-r { flex-direction: row; }
.fb-w { flex-wrap: wrap; }
.fb-j-s { justify-content: flex-start; }
.fb-j-e { justify-content: flex-end; }
.fb-j-c { justify-content: center; }
.fb-j-stretch { justify-content: stretch; }
.fb-j-sb { justify-content: space-between; }
.fb-j-sa { justify-content: space-around; }
.fb-j-se { justify-content: space-evenly; }
.fb-i-s { align-items: flex-start; }
.fb-i-e { align-items: flex-end; }
.fb-i-c { align-items: center; }
.fb-i-stretch { align-items: stretch; }
.fb-i-b { align-items: baseline; }
.fb-s-s { align-self: flex-start; }
.fb-s-e { align-self: flex-end; }
.fb-s-c { align-self: center; }
.fb-s-stretch { align-self: stretch; }
.fb-s-b { align-self: baseline; }
.fb-c-s { align-content: flex-start; }
.fb-c-e { align-content: flex-end; }
.fb-c-c { align-content: center; }
.fb-c-stretch { align-content: stretch; }
.fb-c-sb { align-content: space-between; }
.fb-c-sa { align-content: space-around; }
.fb-c-se { align-content: space-evenly; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: flex-box - breakpoint: m */
  .fb-a-m { flex: 1 1 auto; min-width:0; min-height:0; }
  .fb-n-m { flex: none; }
  .fb-c-m { flex-direction: column; }
  .fb-r-m { flex-direction: row; }
  .fb-w-m { flex-wrap: wrap; }
  .fb-j-s-m { justify-content: flex-start; }
  .fb-j-e-m { justify-content: flex-end; }
  .fb-j-c-m { justify-content: center; }
  .fb-j-stretch-m { justify-content: stretch; }
  .fb-j-sb-m { justify-content: space-between; }
  .fb-j-sa-m { justify-content: space-around; }
  .fb-j-se-m { justify-content: space-evenly; }
  .fb-i-s-m { align-items: flex-start; }
  .fb-i-e-m { align-items: flex-end; }
  .fb-i-c-m { align-items: center; }
  .fb-i-stretch-m { align-items: stretch; }
  .fb-i-b-m { align-items: baseline; }
  .fb-s-s-m { align-self: flex-start; }
  .fb-s-e-m { align-self: flex-end; }
  .fb-s-c-m { align-self: center; }
  .fb-s-stretch-m { align-self: stretch; }
  .fb-s-b-m { align-self: baseline; }
  .fb-c-s-m { align-content: flex-start; }
  .fb-c-e-m { align-content: flex-end; }
  .fb-c-c-m { align-content: center; }
  .fb-c-stretch-m { align-content: stretch; }
  .fb-c-sb-m { align-content: space-between; }
  .fb-c-sa-m { align-content: space-around; }
  .fb-c-se-m { align-content: space-evenly; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
