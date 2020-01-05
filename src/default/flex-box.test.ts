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
.fbj-start { justify-content: flex-start; }
.fbj-end { justify-content: flex-end; }
.fbj-center { justify-content: center; }
.fbj-stretch { justify-content: stretch; }
.fbj-space-between { justify-content: space-between; }
.fbj-space-around { justify-content: space-around; }
.fbj-space-evenly { justify-content: space-evenly; }
.fbi-start { align-items: flex-start; }
.fbi-end { align-items: flex-end; }
.fbi-center { align-items: center; }
.fbi-stretch { align-items: stretch; }
.fbi-baseline { align-items: baseline; }
.fbs-start { align-self: flex-start; }
.fbs-end { align-self: flex-end; }
.fbs-center { align-self: center; }
.fbs-stretch { align-self: stretch; }
.fbs-baseline { align-self: baseline; }
.fbc-start { align-content: flex-start; }
.fbc-end { align-content: flex-end; }
.fbc-center { align-content: center; }
.fbc-stretch { align-content: stretch; }
.fbc-space-between { align-content: space-between; }
.fbc-space-around { align-content: space-around; }
.fbc-space-evenly { align-content: space-evenly; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: flex-box - breakpoint: m */
  .fba-m { flex: 1 1 auto; min-width:0; min-height:0; }
  .fbn-m { flex: none; }
  .fbc-m { flex-direction: column; }
  .fbr-m { flex-direction: row; }
  .fbw-m { flex-wrap: wrap; }
  .fbj-start-m { justify-content: flex-start; }
  .fbj-end-m { justify-content: flex-end; }
  .fbj-center-m { justify-content: center; }
  .fbj-stretch-m { justify-content: stretch; }
  .fbj-space-between-m { justify-content: space-between; }
  .fbj-space-around-m { justify-content: space-around; }
  .fbj-space-evenly-m { justify-content: space-evenly; }
  .fbi-start-m { align-items: flex-start; }
  .fbi-end-m { align-items: flex-end; }
  .fbi-center-m { align-items: center; }
  .fbi-stretch-m { align-items: stretch; }
  .fbi-baseline-m { align-items: baseline; }
  .fbs-start-m { align-self: flex-start; }
  .fbs-end-m { align-self: flex-end; }
  .fbs-center-m { align-self: center; }
  .fbs-stretch-m { align-self: stretch; }
  .fbs-baseline-m { align-self: baseline; }
  .fbc-start-m { align-content: flex-start; }
  .fbc-end-m { align-content: flex-end; }
  .fbc-center-m { align-content: center; }
  .fbc-stretch-m { align-content: stretch; }
  .fbc-space-between-m { align-content: space-between; }
  .fbc-space-around-m { align-content: space-around; }
  .fbc-space-evenly-m { align-content: space-evenly; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
