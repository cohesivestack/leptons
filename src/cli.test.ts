import { command } from './cli';

describe("Cli", () => {

  test("Cli should return help", async () => {
    const output = await new Promise((resolve) => {
      command.parse("help", (err: any, args: any, output: any) => {
        resolve(output);
      })
    }) as string;

    expect((new RegExp(/Init a leptons config file/)).test(output)).toBe(true);
  });

});
