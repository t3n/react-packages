import * as theme from './theme';
import { ThemeBorder } from './theme/border';
import { ThemeButtonStyles } from './theme/buttonStyles';
import { ThemeColors } from './theme/colors/colors';
import { ThemeFonts } from './theme/font/fonts.d';
import { ThemeFontSizes } from './theme/font/fontSizes';
import { ThemeLineHeights } from './theme/font/lineHeights';
import { ThemeTextStyles } from './theme/font/textStyles';
import { ThemeBreakpoints } from './theme/layout/breakpoints';
import { ThemeSpaces } from './theme/layout/space';
import { ThemeLinkStyles } from './theme/linkStyles';
import { ThemeShadows } from './theme/shadows';

export interface Theme {
  breakpoints: ThemeBreakpoints;
  space: ThemeSpaces;
  colors: ThemeColors;
  border: ThemeBorder;
  fontSizes: ThemeFontSizes;
  lineHeights: ThemeLineHeights;
  fonts: ThemeFonts;
  textStyles: ThemeTextStyles;
  shadows: ThemeShadows;
  buttonStyles: ThemeButtonStyles;
  linkStyles: ThemeLinkStyles;
}

export interface ThemeProps {
  theme: Theme;
}

export {
  composeTextStyle,
  getColorForBackground,
  getThemeColor,
  hexToRgb,
} from './utils';

export { theme };
