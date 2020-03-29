import * as fs from 'fs';
import * as path from 'path';
import * as Helper from "./builder-helper";

describe("Builder Helper", () => {

  test("should extract class", () => {
    const html1 = `
      Some text <a class="p-l-1 x-p-r-1 {{program_variable}} m-r-1_1  custom _custom">some link</a>
      <span class=" w-3p "/>`

    const classNames = Helper.extractClassesFromContent(html1);

    expect(classNames.length).toBe(6);
    expect(classNames[0]).toBe('p-l-1');
    expect(classNames[1]).toBe('x-p-r-1');
    expect(classNames[2]).toBe('m-r-1_1');
    expect(classNames[3]).toBe('custom');
    expect(classNames[4]).toBe('_custom');
    expect(classNames[5]).toBe('w-3p');
  });

  test("should extract class from source files", () => {
    const html1 = `
      Some text <a class="p-l-1">some link</a><span class=" w-3p "/>`

    const html2 = `
      Some text <a class="p-l-2 p-l-1">some link</a><span class=" w-3p "/>`

    const basePath = path.resolve(__dirname, '../tmp');

    fs.writeFileSync(path.resolve(basePath, 'test1.html'), html1);
    fs.writeFileSync(path.resolve(basePath, 'test2.xhtml'), html2);

    const classNames = Helper.extractClassesFromSource([
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

  test("should get distinct classes", () => {
    let classes = ['p-1', 'p-1', 'p-2', 'p-4', 'p-1', 'p-3', 'p-2'];
    classes = Helper.distinctClasses(classes);

    expect(classes.length).toBe(4);

    expect(classes[0]).toBe('p-1');
    expect(classes[1]).toBe('p-2');
    expect(classes[2]).toBe('p-4');
    expect(classes[3]).toBe('p-3');
  });
});
