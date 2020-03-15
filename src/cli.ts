import program from 'commander';
import { buildFromFileToFile } from './builder';
import { init } from './config';

program.version('0.0.1');

program
  .command('init [file_path]')
  .description('init a leptons config file. Defaults to ./leptons.yaml')
  .option("-s, --source [source]", "set the source paths separated by comma. Ex: *.html,*.js")
  .action((configPath, options) => {

    configPath = configPath || './leptons.yaml';
    const source = options.source?.split(',');

    init(configPath, source);

    console.log("The leptons configuration file '" + configPath + "' was created!\n" +
      "Edit it or run:\n" +
      "  'leptons build'\n" +
      "  'leptons build > mystyles.css'\n" +
      "  'leptons build -o mystyles.css'\n");

  });

program
  .command('build [file_path]')
  .description('build a leptons css file. Defaults to ./leptons.css')
  .option("-c, --config [file_path]", "set the config file path. Defaults to ./leptons.yaml")
  .action((cssPath, options) => {

    cssPath = cssPath || './leptons.css';
    const configPath = options.config || './leptons.yaml';

    buildFromFileToFile(configPath, cssPath);

    console.log("The leptons css file '" + cssPath + "' was created!");

  });

program.parse(process.argv)