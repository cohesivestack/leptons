import program from 'commander';
import { init, parseFromFile, isConfigErrors } from './config';
import { Builder } from './builder';
import { Watcher } from './watcher';
import { SearchData } from './search-data';
import { printOutCoverInfo } from './cover-info';

program.version('0.0.1');

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

    const configPath = options.config || './leptons.yaml';
    const config = parseFromFile(configPath);

    if (isConfigErrors(config)) {
      throw Error("Errors parsing plain object:\n" + config);
    }

    const builder = new Builder(config, true);
    builder.buildToFile();

    console.log("The leptons css file '" + config.output + "' was created!");
  });


program
  .command('watch')
  .description('watch to build a leptons css file. Defaults to ./leptons.css')
  .option("-c, --config [file_path]", "set the config file path. Defaults to ./leptons.yaml")
  .action((options) => {

    const watcher = new Watcher(options.config || './leptons.yaml')
    watcher.watch();

    console.log("Leptons is watching");
  });

program
  .command('dev-search-data')
  .description('Export search data information to use with Fuse.js')
  .action(() => {

  console.log(SearchData.exportToJsonString());
});

program
  .command('dev-cover-info')
  .description('Display information about the CSS styles covered by Leptons')
  .action(() => {

  printOutCoverInfo();
});

program.parse(process.argv)