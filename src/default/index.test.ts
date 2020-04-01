import { initPackage, getPackage } from "./index";

describe("Default Package", () => {

  test("should init package", () => {
    const pkg = initPackage();
    expect(getPackage()).toBe(pkg);
  });
});
