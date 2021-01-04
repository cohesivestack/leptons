import fs from 'fs';
import path from 'path';
import childProcess from 'child_process';
import { init } from './config';

const cli = path.join(__dirname, './cli.ts');

const testTimeout = 10000;

describe("Cli", () => {

  test("should return help", (done) => {

    childProcess.exec(`ts-node ${cli} -h`, function(_error: any, stdout: any, stderr: any) {
      expect((new RegExp(/Usage: cli\.ts \[options\] \[command\]/)).test(stdout)).toBe(true);
      done();
    });

  }, testTimeout);

  test("should init the configuration file", (done) => {
    const configPath = './tmp/leptons.yaml'

    if (fs.existsSync(configPath)) fs.unlinkSync(configPath);

    expect(fs.existsSync(configPath)).toBe(false);

    childProcess.exec(`ts-node ${cli} init ${configPath}`, function(_error: any, stdout: any, stderr: any) {
      expect((new RegExp(/The leptons configuration file '\.\/tmp\/leptons\.yaml' was created!/)).test(stdout)).toBe(true);
      done();
      expect(fs.existsSync(configPath)).toBe(true);
    });

  }, testTimeout);


  test("should build the configuration file", (done) => {
    const configPath = './tmp/leptons.yaml'
    const cssPath = './tmp/leptons.css'

    if (fs.existsSync(configPath)) fs.unlinkSync(configPath);
    if (fs.existsSync(cssPath)) fs.unlinkSync(cssPath);

    expect(fs.existsSync(cssPath)).toBe(false);

    fs.writeFileSync("./tmp/index.html", '<p class="p-10 p-20-M">Text</p>');

    init(configPath, cssPath);

    const configContent = fs.readFileSync(configPath).toString("utf-8").replace(/- '\*\.htm/g, "- './tmp/index.htm");
    fs.writeFileSync(configPath, configContent);

    childProcess.exec(`ts-node ${cli} build -c ${configPath}`, function(_error: any, stdout: any, stderr: any) {
      expect((new RegExp(/The leptons css file '\.\/tmp\/leptons\.css' was created!/)).test(stdout)).toBe(true);
      done();
      expect(fs.existsSync(cssPath)).toBe(true);

      const result = fs.readFileSync("./tmp/leptons.css").toString('utf-8')
      expect(result.trim()).toBe(
`.p-10 { padding: 10rem; }
@media screen and (min-width: 48rem) {
  .p-20-M { padding: 20rem; }
}
@media screen and (min-width: 64rem) {
}`);
    });

  }, testTimeout);

});
