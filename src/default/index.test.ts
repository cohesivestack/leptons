import { getInitConfig } from '../config';
import { pkg as defaultPkg } from './index';

describe('Default Pkg', () => {
  test('Init function should return a yaml content', () => {
    const output = getInitConfig(defaultPkg);

    const expectedOutput = `
package: default
breakpoints:
  m: 48
  l: 64
  xl: 80
modules:
  - colors: {lightest-red: '#ffebee', light-red: '#ef9a9a', red: '#f44336', dark-red: '#d32f2f', darkest-red: '#b71c1c'}
  - font-size: [0.5, 0.75, 1, 1.5, 2, 3, 4, 6]
`;

    expect(output.trim()).toBe(expectedOutput.trim());
  });

});