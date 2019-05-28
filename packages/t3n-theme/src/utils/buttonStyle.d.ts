import { ThemeProps } from '../index';
interface ButtonProps extends ThemeProps {
    secondary?: boolean;
    color?: 'light' | 'dark';
    inverse?: boolean;
}
declare const composeButtonStyle: ({ theme, secondary, color: colorProp, inverse }: ButtonProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export default composeButtonStyle;
