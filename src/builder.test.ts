import * as fs from 'fs';
import * as path from 'path';
import { Builder } from "./builder";

describe("Builder", () => {

  test("should extract class", () => {
    const html1 = `
      Some text <a class="p-l-1 {{program_variable}} m-r-1_1  custom _custom">some link</a>
      <span class=" w-3p "/>`

    const classNames = Builder.extractClassesFromContent(html1);

    expect(classNames.length).toBe(5);
    expect(classNames[0]).toBe('p-l-1');
    expect(classNames[1]).toBe('m-r-1_1');
    expect(classNames[2]).toBe('custom');
    expect(classNames[3]).toBe('_custom');
    expect(classNames[4]).toBe('w-3p');
  });

  test("should extract class from source files", () => {
    const html1 = `
      Some text <a class="p-l-1">some link</a><span class=" w-3p "/>`

    const html2 = `
      Some text <a class="p-l-2 p-l-1">some link</a><span class=" w-3p "/>`

    const basePath = path.resolve(__dirname, '../tmp');

    fs.writeFileSync(path.resolve(basePath, 'test1.html'), html1);
    fs.writeFileSync(path.resolve(basePath, 'test2.xhtml'), html2);

    const classNames = Builder.extractClassesFromSource([
      path.resolve(basePath, 'test1.html'),
      path.resolve(basePath, '*.xhtml'),
    ]);

    expect(classNames.length).toBe(5);
    expect(classNames[0]).toBe('p-l-1');
    expect(classNames[1]).toBe('w-3p');
    expect(classNames[2]).toBe('p-l-2');
    expect(classNames[3]).toBe('p-l-1');
    expect(classNames[4]).toBe('w-3p');
  });
});
