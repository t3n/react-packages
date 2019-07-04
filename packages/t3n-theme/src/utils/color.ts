import { themeGet } from '@styled-system/theme-get';

export const getThemeColor = (c: string) => themeGet(`colors.${c}`);
