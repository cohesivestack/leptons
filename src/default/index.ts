import { Package, ConfigOptions } from "../package";
import { DefaultPackage } from "./default-package";
import { Breakpoints } from "../breakpoints";
import { Colors } from "../colors";
import { Fonts } from "../fonts";

let defaultPackage: DefaultPackage | null = null;

const _breakpoints: Breakpoints = {
  M: 48,
  L: 64
};

const _colors: Colors = {
  'lightestRed': '#ffebee',
  'lightRed': '#ef9a9a',
  'red': '#f44336',
  'darkRed': '#d32f2f',
  'darkestRed': '#b71c1c',
  'lightestPink': '#fce4ec',
  'lightPink': '#f48fb1',
  'pink': '#e91e63',
  'darkPink': '#c2185b',
  'darkestPink': '#880e4f',
  'lightestPurple': '#f3e5f5',
  'lightPurple': '#ce93d8',
  'purple': '#9c27b0',
  'darkPurple': '#7b1fa2',
  'darkestPurple': '#4a148c',
  'lightestBlue': '#e3f2fd',
  'lightBlue': '#90caf9',
  'blue': '#2196f3',
  'darkBlue': '#1976d2',
  'darkestBlue': '#0d47a1',
  'lightestGreen': '#e8f5e9',
  'lightGreen': '#a5d6a7',
  'green': '#4caf50',
  'darkGreen': '#388e3c',
  'darkestGreen': '#1b5e20',
  'lightestYellow': '#fffde7',
  'lightYellow': '#fff59d',
  'yellow': '#ffeb3b',
  'darkYellow': '#fbc02d',
  'darkestYellow': '#f57f17',
  'lightestOrange': '#fff3e0',
  'lightOrange': '#ffcc80',
  'orange': '#ff9800',
  'darkOrange': '#f57c00',
  'darkestOrange': '#e65100',
  'lightestBrown': '#efebe9',
  'lightBrown': '#bcaaa4',
  'brown': '#795548',
  'darkBrown': '#5d4037',
  'darkestBrown': '#3e2723',
  'lightestGray': '#fafafa',
  'lightGray': '#eeeeee',
  'gray': '#9e9e9e',
  'darkGray': '#616161',
  'darkestGray': '#212121',
  'white': '#ffffff',
  'black': '#000000'
};

const _fonts: Fonts = {
  'sans-serif': 'roboto, "helvetica neue", helvetica, tahoma, geneva, verdana, arial',
  'serif': 'georgia, baskerville, palatino,times, "times new roman"',
  'mono': '"robot slab", "roboto mono", monaco, courier, "courier new"',
  'condensed': '"roboto condensed", "arial narrow"',
  'script': '"brush script mt", "apple chancery", "comic sans ms"' 
}

export function initPackage(config?: ConfigOptions): Package {
  config = config || {}
  config.breakpoints = config.breakpoints || _breakpoints;
  config.colors = config.colors || _colors;
  config.fonts = config.fonts || _fonts;

  return defaultPackage = new DefaultPackage(config);
}

export function getPackage(): Package {
  return defaultPackage as Package;
}