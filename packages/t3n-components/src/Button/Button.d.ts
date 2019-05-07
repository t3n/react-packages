import { ReactNode } from 'react';
import { ThemeProps } from '@t3n/styles';
export interface ButtonProps extends ThemeProps {
    as?: 'div' | 'span' | 'a' | 'button';
    rounded?: boolean;
    icon?: ReactNode;
    secondary?: boolean;
    color?: 'light' | 'dark';
    inverse?: boolean;
    small?: boolean;
    wide?: boolean;
    children?: ReactNode;
}
declare const Button: import("styled-components").StyledComponent<"a", any, {
    role: "button";
} & ButtonProps, "role">;
export default Button;
