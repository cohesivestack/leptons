import { convertLengthToCss, isLengthValid, LengthType } from "./length";

describe("Length", () => {
  test("atomToCssStyle should create css styles with lengths", () => {
    [ ['19', '19mm', LengthType.Mm],
      ['19mm', '19mm', LengthType.Mm],
      ['19', '19cm', LengthType.Cm],
      ['19cm', '19cm', LengthType.Cm],
      ['19', '19in', LengthType.In],
      ['19in', '19in', LengthType.In],
      ['19', '19px', LengthType.Px],
      ['19px', '19px', LengthType.Px],
      ['19', '19pt', LengthType.Pt],
      ['19pt', '19pt', LengthType.Pt],
      ['19', '19pc', LengthType.Pc],
      ['19pc', '19pc', LengthType.Pc],
      ['19', '19em', LengthType.Em],
      ['19em', '19em', LengthType.Em],
      ['19', '19ex', LengthType.Ex],
      ['19ex', '19ex', LengthType.Ex],
      ['19', '19ch', LengthType.Ch],
      ['19ch', '19ch', LengthType.Ch],
      ['19', '19rem', LengthType.Rem],
      ['19rem', '19rem', LengthType.Rem],
      ['19', '19vw', LengthType.Vw],
      ['19vw', '19vw', LengthType.Vw],
      ['19', '19vh', LengthType.Vh],
      ['19vh', '19vh', LengthType.Vh],
      ['19', '19vmin', LengthType.Vmin],
      ['19vmin', '19vmin', LengthType.Vmin],
      ['19', '19vmax', LengthType.Vmax],
      ['19vmax', '19vmax', LengthType.Vmax],
      ['19', '19%', LengthType.P],
      ['19%', '19%', LengthType.P],
      ['19p', '19%', LengthType.P],
      ['n19', '-19mm', LengthType.Mm],
      ['n19%', '-19%', LengthType.P]
    ].forEach(([v, r, t]) => expect(convertLengthToCss(v, t as LengthType)).toBe(r))
  });

  test("isLengthValid should validate length", () => {
    [ '19mm',
      '19cm',
      '19in',
      '19px',
      '19pt',
      '19pc',
      '19em',
      '19ex',
      '19ch',
      '19rem',
      '19vw',
      '19vh',
      '19vmin',
      '19vmax',
      '19p',
      '19%',
      'n19vmax',
      'n19p',
      'n19%',
    ].forEach(l => expect(isLengthValid(l)).toBe(true))
  });

  test("isLengthValid should not validate length", () => {
    [ '19z',
      '19n',
      '19In',
      '19PX',
      'n19PX'
    ].forEach(l => expect(isLengthValid(l)).toBe(false))
  });

});