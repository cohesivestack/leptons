import { Builder } from "../builder";

describe("Builder", () => {

  test("FontSize shoud be created ", () => {

    const plainConfig = {
      package: "default",
      breakpoints: {m: 48, l: 64},
      includeAll: false,
      modules: [
        { "font-size": [0.5, 1, 1.5] }
      ]
    }

    const builder = new Builder();
    let output = builder.build(plainConfig);

    expect(output.trim().length).toBeGreaterThan(0);
  });
});
