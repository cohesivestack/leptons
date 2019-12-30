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
modules:
  - colors: {lightest-red: '#ffebee', light-red: '#ef9a9a', red: '#f44336', dark-red: '#d32f2f', darkest-red: '#b71c1c', lightest-pink: '#fce4ec', light-pink: '#f48fb1', pink: '#e91e63', dark-pink: '#c2185b', darkest-pink: '#880e4f', lightest-purple: '#f3e5f5', light-purple: '#ce93d8', purple: '#9c27b0', dark-purple: '#7b1fa2', darkest-purple: '#4a148c', lightest-blue: '#e3f2fd', light-blue: '#90caf9', blue: '#2196f3', dark-blue: '#1976d2', darkest-blue: '#0d47a1', lightest-green: '#e8f5e9', light-green: '#a5d6a7', green: '#4caf50', dark-green: '#388e3c', darkest-green: '#1b5e20', lightest-yellow: '#fffde7', light-yellow: '#fff59d', yellow: '#ffeb3b', dark-yellow: '#fbc02d', darkest-yellow: '#f57f17', lightest-orange: '#fff3e0', light-orange: '#ffcc80', orange: '#ff9800', dark-orange: '#f57c00', darkest-orange: '#e65100', lightest-brown: '#efebe9', light-brown: '#bcaaa4', brown: '#795548', dark-brown: '#5d4037', darkest-brown: '#3e2723', lightest-gray: '#fafafa', light-gray: '#eeeeee', gray: '#9e9e9e', dark-gray: '#616161', darkest-gray: '#212121', white: '#ffffff', black: '#000000'}
  - border-widths: [0.0625, 0.125, 0.25, 0.5, 1]
  - font-size: [0.5, 0.75, 1, 1.5, 2, 3, 4, 6]
  - padding: [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12]
  - margin: [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12]
`;

    expect(output.trim()).toBe(expectedOutput.trim());
  });

});