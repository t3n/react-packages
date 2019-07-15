import * as theme from './theme';

export type Theme = typeof theme;
export interface ThemeProps {
  theme: Theme;
}

export { composeTextStyle, composeButtonStyle, getThemeColor } from './utils';

export { theme };
