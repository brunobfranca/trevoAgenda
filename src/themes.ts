import {DefaultTheme as IDefaultTheme} from 'styled-components';

// TODO: Enforce spacing
const baseSpacing = 10;

export const DefaultConfigs = {
  spacing: {
    tiny: baseSpacing * 0.8,
    small: baseSpacing * 1.6,
    base: baseSpacing * 2.4,
    large: baseSpacing * 4.8,
    extraLarge: baseSpacing * 6.4,
  },
  typography: {
    fontFamily: {
      regular: 'CeraPro-Regular',
      bold: 'CeraPro-Bold',
    },
    sizes: {
      tiny: {size: 11, lineHeight: 14},
      small: {size: 12, lineHeight: 15},
      default: {size: 14, lineHeight: 18},
      medium: {size: 16, lineHeight: 23},
      large: {size: 19, lineHeight: 27},
      extraLarge: {size: 23, lineHeight: 33},
    },
  },
};

export const DefaultTheme: IDefaultTheme = {
  ...DefaultConfigs,
  dark: false,
  colors: {
    primary: '#283C64',
    secondary: '#283C64',
    title: '#fff',
    subtitle: '#fff',
    background: '#fff',
    disabled: '#c9c9c9',
    disabledSecondary: '#283C64',
    error: 'red',
  },
};
