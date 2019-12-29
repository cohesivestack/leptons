import { Module } from '../module';
import { BuildContext } from '../build-context';


const defaultColors: any = {
  'lightest-red': '#ffebee',
  'light-red': '#ef9a9a',
  'red': '#f44336',
  'dark-red': '#d32f2f',
  'darkest-red': '#b71c1c'
};

export const colors: Module = {
  name: '',
  prefix: '',
  useShortName: 'inapplicable',
  initExplicit: true,

  build: (context: BuildContext) => {
    const colors = context.valueOrDefault(defaultColors);

    Object.keys(colors).forEach(name => {
      context.append(name, 'color: ' + colors[name]);
    });
  }

}