import { ThemeBackgroundColors } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
interface BadgeProps extends ThemeProps {
    bgColor: ThemeBackgroundColors;
    small?: boolean;
    rounded?: boolean;
}
declare const Badge: import("styled-components").StyledComponent<"span", any, BadgeProps, never>;
export default Badge;
