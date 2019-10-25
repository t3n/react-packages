import { themeGet } from '@styled-system/theme-get';
import hexRgb from 'hex-rgb';

import { ThemeBackgroundColor } from '../theme/colors/colors';

export const getThemeColor = (c: string) => themeGet(`colors.${c}`);

export const getColorForBackground = (c: ThemeBackgroundColor) => {
  switch (c) {
    case 'highlight':
    case 'inverse':
      return themeGet('colors.text.inverse');
    default:
      return themeGet('colors.text.primary');
  }
};

export const hexToRgb = (hex: string) => {
  const { red, green, blue } = hexRgb(hex);

  return `rgb(${red},${green},${blue})`;
};
