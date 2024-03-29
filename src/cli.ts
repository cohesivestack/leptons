import { Command, createCommand, createOption } from 'commander';
import { init, parseFromFile, isSchemaErrors } from './config';
import { Builder } from './builder';
import { Watcher } from './watcher';
import { printOutCoverInfo } from './coverage-info';
import { exportToJsonString } from './search-data-exporter';
import { ErrorObject } from 'ajv';
import { printOutSchemaErrors, SchemaError } from './error';
import chalk from 'chalk';
const packageJson = require('../package.json');

const program = new Command();
program.version(packageJson.version);

program
  .command('init [file_path]')
  .description('init a leptons config file. Defaults to ./leptons.yaml')
  .option("-o, --output [output]", "set the output css path")
  .action((configPath, options) => {

    configPath = configPath || './leptons.yaml';
    const output = options.ouput;

    init(configPath, output);

    console.log("The leptons configuration file '" + configPath + "' was created!\n" +
      "Edit it or run:\n" +
      "  'leptons build'\n" +
      "  'leptons build > mystyles.css'\n" +
      "  'leptons build -o mystyles.css'\n");

  });

program
  .command('build')
  .description('build a leptons css file. Defaults to ./leptons.css')
  .option("-c, --config [file_path]", "set the config file path. Defaults to ./leptons.yaml")
  .action((options) => {

    try {
      const configPath = options.config || './leptons.yaml';
      const config = parseFromFile(configPath);

      if (isSchemaErrors(config)) {
        printOutSchemaErrors((config as ErrorObject[]).map(e => new SchemaError(e)));
      } else {
        const builder = new Builder(config, true);
        builder.buildToFile();

        console.log(chalk.green("\nThe leptons css file '" + config.output + "' was created!"));
      }
    } catch (e) {
      console.error(chalk.red(e))
    }
  });


program
  .command('watch')
  .description('watch to build a leptons css file. Defaults to ./leptons.css')
  .option("-c, --config [file_path]", "set the config file path. Defaults to ./leptons.yaml")
  .action((options) => {

    const watcher = new Watcher(options.config || './leptons.yaml')
    watcher.watch();
  });

program
  .command('dev')
  .description('Command to be used by Leptons developers')
  .commands = [

    createCommand('search-data')
      .description('Export search data information to use with Fuse.js')
      .action(() => console.log(exportToJsonString())),

    createCommand('coverage')
      .addOption(
        createOption("-f --filter <type>", "Type between covered | covered-with-skip | not-covered | partially-covered | skipped")
          .choices(["all", "covered", "not-covered", "covered-with-skip", "partially-covered", "skipped"])
          .default("all")
      )
      .description('Display information about the CSS styles covered by Leptons')
      .action((options) => printOutCoverInfo(options.filter))

  ];

program.parse(process.argv)