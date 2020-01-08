import { Builder } from "./builder";
import fs from "fs";

describe("Builder", () => {

  test("shoud init a default config file", () => {
    const filePath = './tmp/leptons.yaml';
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    expect(fs.existsSync(filePath)).toBe(false);

    const builder = new Builder();
    builder.init(filePath);

    expect(fs.existsSync(filePath)).toBe(true);

    const yamlOutput = fs.readFileSync(filePath, 'utf8');

    expect((new RegExp(/^breakpoints:/)).test(yamlOutput)).toBe(true);

  });

  test("shoud create an output", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48, l: 64, xl: 128},
      modules: [
        { "font-size": [0.5, 1, 1.5] }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    expect(output.trim().length).toBeGreaterThan(0);
  });

  test("shoud create an output with classes", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1] }
      ],
      classes: [
        {
          "myclass-black": "font-weight: bold; color: black;"
        },
        {
          "myclass-white": "font-weight: bold; color: white;"
        }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: font-size */
.f0_5 { font-size: 0.5rem; }
.f1 { font-size: 1rem; }
/* Custom Classes */
.myclass-black { font-weight: bold; color: black; }
.myclass-white { font-weight: bold; color: white; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-size - breakpoint: m */
  .f0_5-m { font-size: 0.5rem; }
  .f1-m { font-size: 1rem; }
  /* Custom Classes - breakpoint: m */
  .myclass-black-m { font-weight: bold; color: black; }
  .myclass-white-m { font-weight: bold; color: white; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });

  test("shoud create an output with classes without breakpoints", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1] }
      ],
      classes: [
        {
          "myclass-black": "font-weight: bold; color: black;",
          breakpoints: false
        },
        {
          "myclass-white": "font-weight: bold; color: white;"
        }
      ]
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: font-size */
.f0_5 { font-size: 0.5rem; }
.f1 { font-size: 1rem; }
/* Custom Classes */
.myclass-black { font-weight: bold; color: black; }
.myclass-white { font-weight: bold; color: white; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-size - breakpoint: m */
  .f0_5-m { font-size: 0.5rem; }
  .f1-m { font-size: 1rem; }
  /* Custom Classes - breakpoint: m */
  .myclass-white-m { font-weight: bold; color: white; }

}
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });


  test("shoud create an output with custom css", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1] }
      ],
      css: 'body { padding: 0 }'
    }

    const builder = new Builder();
    let output = builder.buildFromPlainConfig(plainConfig);

    const expectedOutput = `
/* Module: font-size */
.f0_5 { font-size: 0.5rem; }
.f1 { font-size: 1rem; }

/* Breakpoint: m */
@media screen and (min-width: 48rem) {

  /* Module: font-size - breakpoint: m */
  .f0_5-m { font-size: 0.5rem; }
  .f1-m { font-size: 1rem; }

}

/* Custom CSS */
body { padding: 0 }
`

    expect(output.trim()).toBe(expectedOutput.trim());
  });
});
