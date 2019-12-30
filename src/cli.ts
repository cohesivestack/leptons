import program from 'commander';
import { Builder } from './builder';

program.version('0.0.1')
  .command('init [file_path]')
  .description('init a leptons config file. Defaults to ./leptons.yaml')
  .action(filePath => {
    if (!filePath) filePath = './leptons.yaml'
    const builder = new Builder();
    builder.init(filePath as string);
    console.log("The leptons configuration file '" + filePath + "' was created!\n" +
      "Edit it or run:\n" +
      "  'leptons build'\n" +
      "  'leptons build > mystyles.css'\n" +
      "  'leptons build -o mystyles.css'\n");
  });

program.parse(process.argv)