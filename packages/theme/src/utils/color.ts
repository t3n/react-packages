import { themeGet } from '@styled-system/theme-get';
import { ThemeBackgroundColors } from '../theme/colors/colors';

export const getThemeColor = (c: string) => themeGet(`colors.${c}`);

export const getColorForBackground = (c: ThemeBackgroundColors) => {
  switch (c) {
    case 'highlight':
    case 'inverse':
      return themeGet('colors.text.inverse');
    default:
      return themeGet('colors.text.primary');
  }
};
