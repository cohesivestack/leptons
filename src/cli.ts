import yargs from 'yargs';
import { Builder } from './builder';

export const command = yargs
  .command('init', 'Init a leptons config file', y => {
    y.option('file', {
        alias: 'f',
        describe: 'Config file path',
        default: 'leptons.yaml'
      })
  }, (argv) => {
    const builder = new Builder();
    builder.init(argv.file as string);
    console.log("The leptons configuration file '" + argv.file + "' was created!\n" +
      "Edit it or run:\n" +
      "  'leptons build'\n" +
      "  'leptons build > mystyles.css'\n" +
      "  'leptons build -o mystyles.css'\n");
  });