import { ThemeProps } from '@t3n/theme';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
type BackgroundColor = ThemeBackgroundColor | ThemeBackgroundColor[];
export interface GlobalStyleProps extends ThemeProps {
    variant?: BackgroundColor;
}
declare const GlobalStyle: import("react").NamedExoticComponent<import("styled-components").ExecutionProps & GlobalStyleProps>;
export default GlobalStyle;
