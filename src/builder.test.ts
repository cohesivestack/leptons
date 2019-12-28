import { Builder } from "./builder";
import { configPath } from './testing';

describe("Builder", () => {

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
