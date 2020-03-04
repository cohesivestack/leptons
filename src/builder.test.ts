import { Builder } from "./builder";

describe("Builder", () => {

  test("should extract class", () => {
    const html1 = `
      Some text <a class="p-l-1 {{program_variable}} m-r-1_1  custom _custom">some link</a>
      <span class=" w-3p "/>`

    const classNames = Builder.extractClasses(html1);

    expect(classNames.length).toBe(5);
    expect(classNames[0]).toBe('p-l-1');
    expect(classNames[1]).toBe('m-r-1_1');
    expect(classNames[2]).toBe('custom');
    expect(classNames[3]).toBe('_custom');
    expect(classNames[4]).toBe('w-3p');
  });
});
