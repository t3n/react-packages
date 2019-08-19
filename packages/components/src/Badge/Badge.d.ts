import { ThemeBackgroundColors } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
interface BadgeProps extends ThemeProps {
    variant?: ThemeBackgroundColors;
    small?: boolean;
    rounded?: boolean;
}
export declare const Badge: import("styled-components").StyledComponent<"span", any, BadgeProps, never>;
export {};
