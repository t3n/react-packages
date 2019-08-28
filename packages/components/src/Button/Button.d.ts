import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export declare type ButtonColors = 'light' | 'dark';
export interface ButtonProps extends ButtonHTMLAttributes<any>, MarginProps, WidthProps {
    rounded?: boolean;
    icon?: ReactNode;
    secondary?: boolean;
    color?: ButtonColors;
    inverse?: boolean;
    loading?: boolean;
    small?: boolean;
    disabled?: boolean;
}
export declare const buttonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ButtonProps & ThemeProps, any>>;
export declare const Button: React.FC<ButtonProps>;
