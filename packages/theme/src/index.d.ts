import * as theme from './theme';
import { ThemeFonts } from './theme/font/fonts';
import { ThemeBreakpoints } from './theme/layout/breakpoints';
import { ThemeSpaces } from './theme/layout/space';
import { ThemeColors } from './theme/colors/colors';
import { ThemeBorder } from './theme/border';
import { ThemeFontSizes } from './theme/font/fontSizes';
import { ThemeLineHeights } from './theme/font/lineHeights';
import { ThemeTextStyles } from './theme/font/textStyles';
import { ThemeShadows } from './theme/shadows';
import { ThemeButtonStyles } from './theme/buttonStyles';
import { ThemeLinkStyles } from './theme/linkStyles';
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
export { composeTextStyle, getThemeColor, getColorForBackground, hexToRgb, } from './utils';
export { theme };
