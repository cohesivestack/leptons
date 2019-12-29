import { Builder } from "./builder";
import fs from "fs";

describe("Builder", () => {

  test("Builder shoud init a default config file", () => {
    const filePath = './tmp/leptons.yaml';
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    expect(fs.existsSync(filePath)).toBe(false);

    const builder = new Builder();
    builder.init(filePath);

    expect(fs.existsSync(filePath)).toBe(true);

    const yamlOutput = fs.readFileSync(filePath, 'utf8');

    expect((new RegExp(/^package: default/)).test(yamlOutput)).toBe(true);

  });

  test("Builder shoud create an output", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48, l: 64, xl: 128},
      modules: [
        { "font-size": [0.5, 1, 1.5] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    expect(output.trim().length).toBeGreaterThan(0);
  });
});
