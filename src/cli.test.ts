import fs from 'fs';
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

  test("Cli should init the configuration file", async () => {
    const filePath = './tmp/leptons.yaml'

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    const log = jest.spyOn(global.console, 'log')
    await new Promise((resolve) => {
      command.parse('init -f ' + filePath, (err: any, args: any, output: any) => {
        resolve(output);
      })
    });

    expect(fs.existsSync(filePath)).toBe(true);
    expect(log).toHaveBeenCalledWith(expect.stringMatching(/The leptons configuration file/));
  });

});
