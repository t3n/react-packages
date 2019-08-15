import { ReactNode } from 'react';
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
declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export default Button;
