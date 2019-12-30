import fs from 'fs';
import path from 'path';
import childProcess from 'child_process';

const cli = path.join(__dirname, './cli.ts');

describe("Cli", () => {

  test("Cli should return help", (done) => {

    childProcess.exec(`ts-node ${cli} -h`, function(_error: any, stdout: any, stderr: any) {
      expect((new RegExp(/Usage: cli\.ts \[options\] \[command\]/)).test(stdout)).toBe(true);
      done();
    });

  });

  test("Cli should init the configuration file", (done) => {
    const configPath = './tmp/leptons.yaml'

    if (fs.existsSync(configPath)) fs.unlinkSync(configPath);

    expect(fs.existsSync(configPath)).toBe(false);

    childProcess.exec(`ts-node ${cli} init ${configPath}`, function(_error: any, stdout: any, stderr: any) {
      expect((new RegExp(/The leptons configuration file '\.\/tmp\/leptons\.yaml'/)).test(stdout)).toBe(true);
      done();
    });

  });

});
