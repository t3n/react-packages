import { color } from 'styled-system';

import { ThemeProps } from '..';

export const getThemeColor = (c: string) => ({ theme }: ThemeProps) =>
  color({ color: c, theme });
