import program from 'commander';
import { build, writeToFile } from './builder';
import { init, parseFromFile, isConfigErrors } from './config';
import { Watcher } from './watcher';

program.version('0.0.1');

program
  .command('init [file_path]')
  .description('init a leptons config file. Defaults to ./leptons.yaml')
  .option("-s, --source [source]", "set the source paths separated by comma. Ex: *.html,*.js")
  .option("-o, --output [output]", "set the output css path")
  .action((configPath, options) => {

    configPath = configPath || './leptons.yaml';
    const source = options.source?.split(',');
    const output = options.ouput;

    init(configPath, source, output);

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
    writeToFile(config.output, build(config));

    console.log("The leptons css file '" + config.output + "' was created!");
  });

program
  .command('watch')
  .description('watch to build a leptons css file. Defaults to ./leptons.css')
  .option("-c, --config [file_path]", "set the config file path. Defaults to ./leptons.yaml")
  .action((options) => {

    const configPath = options.config || './leptons.yaml';
    const config = parseFromFile(configPath);

    if (isConfigErrors(config)) {
      throw Error("Errors parsing plain object:\n" + config);
    }
    //writeToFile(config.output, build(config));

    Watcher.watch(configPath, config);

    console.log("Leptons is watching");
  });

program.parse(process.argv)