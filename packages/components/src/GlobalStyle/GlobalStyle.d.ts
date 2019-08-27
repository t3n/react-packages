import { ThemeProps } from '@t3n/theme';
import { ThemeBackgroundColor, ThemeTextColor } from '@t3n/theme/src/theme/colors/colors';
interface GlobalStyleProps extends ThemeProps {
    backgroundColor: ThemeBackgroundColor;
    color?: ThemeTextColor;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<GlobalStyleProps, import("styled-components").DefaultTheme>;
export default GlobalStyle;
