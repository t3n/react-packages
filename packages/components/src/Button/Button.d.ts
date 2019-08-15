import { ReactNode } from 'react';
import { ThemeProps } from '@t3n/theme';
export declare type ButtonColors = 'light' | 'dark';
export interface ButtonProps {
    rounded?: boolean;
    icon?: ReactNode;
    secondary?: boolean;
    color?: ButtonColors;
    inverse?: boolean;
    small?: boolean;
    wide?: boolean;
    disabled?: boolean;
    children?: ReactNode;
}
export declare const buttonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ButtonProps & ThemeProps, any>>;
declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export default Button;
