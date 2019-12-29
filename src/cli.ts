import yargs from 'yargs';

export const command = yargs
  .command('init', 'Init a leptons config file', y => {
    y.option('file', {
        alias: 'f',
        describe: 'Config file path',
        default: 'leptons.yaml'
      })
  }, (argv) => {
    console.log('TODO');
  });