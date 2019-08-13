import { ReactNode } from 'react';
import { ThemeProps } from '@t3n/theme';
export declare type ButtonColors = 'light' | 'dark';
export declare type ButtonAsType = 'div' | 'span' | 'a' | 'button';
export interface ButtonProps extends ThemeProps {
    as?: ButtonAsType;
    rounded?: boolean;
    icon?: ReactNode;
    secondary?: boolean;
    color?: ButtonColors;
    inverse?: boolean;
    small?: boolean;
    wide?: boolean;
    children?: ReactNode;
}
declare const Button: import("styled-components").StyledComponent<"a", any, {
    role: "button";
} & ButtonProps, "role">;
export default Button;
