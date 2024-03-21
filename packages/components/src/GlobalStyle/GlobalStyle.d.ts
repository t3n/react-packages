import { ThemeProps } from '@t3n/theme';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
type BackgroundColor = ThemeBackgroundColor | ThemeBackgroundColor[];
export interface GlobalStyleProps extends ThemeProps {
    variant?: BackgroundColor;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<GlobalStyleProps, import("styled-components").DefaultTheme>;
export default GlobalStyle;
