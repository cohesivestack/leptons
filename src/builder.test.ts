import { Builder } from "./builder";
import { configPath } from './testing';

describe("Builder", () => {

  test("Builder shoud be created", () => {

    console.log(configPath)
    const builder = new Builder(configPath);
    expect(builder).toBeTruthy();

  });

  test("Builder shoud create an output", () => {

    const builder = new Builder(configPath);
    const output = builder.build();
    expect(output).toBeTruthy();

  });

});
