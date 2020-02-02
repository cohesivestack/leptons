import { numberToName } from './builder-helper';

describe("BuilderHelper", () => {
  test("numberToName should convert correctly", () => {
    expect(numberToName(1)).toEqual('1');
    expect(numberToName(10.1)).toEqual('10_1');
    expect(numberToName(-1)).toEqual('n1');
    expect(numberToName(-10.1)).toEqual('n10_1');
  });
});