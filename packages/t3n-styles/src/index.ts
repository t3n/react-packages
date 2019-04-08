import * as theme from './theme';

export type Theme = typeof theme;
export interface ThemeProps {
  theme: Theme;
}

export { composeTextStyle } from './utils';

export { theme };
