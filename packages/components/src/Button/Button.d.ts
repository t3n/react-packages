import React, { ButtonHTMLAttributes } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export declare type ButtonVariant = 'primary' | 'secondary';
export declare type ButtonColorVariant = 'default' | 'inverse' | 'highlight';
export declare type ButtonSizeVariant = 'small' | 'regular' | 'big';
export interface ButtonProps extends ButtonHTMLAttributes<any>, MarginProps, WidthProps {
    variant?: ButtonVariant;
    color?: ButtonColorVariant;
    size?: ButtonSizeVariant;
    iconLeft?: React.FunctionComponent<React.SVGProps<SVGElement>>;
    iconRight?: React.FunctionComponent<React.SVGProps<SVGElement>>;
    loading?: boolean;
    disabled?: boolean;
}
export declare const buttonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ThemeProps & ButtonProps, any>>;
export declare const Button: React.FC<ButtonProps>;
