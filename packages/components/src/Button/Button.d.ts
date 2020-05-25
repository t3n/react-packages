import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export declare type ButtonAsType = 'button' | 'a';
export declare type ButtonVariant = 'primary' | 'secondary';
export declare type ButtonColorVariant = 'default' | 'inverse' | 'highlight';
export declare type ButtonSizeVariant = 'small' | 'regular' | 'big';
export interface ButtonProps extends ButtonHTMLAttributes<any>, Omit<AnchorHTMLAttributes<any>, 'type'>, MarginProps, WidthProps {
    variant?: ButtonVariant;
    color?: ButtonColorVariant;
    size?: ButtonSizeVariant;
    iconLeft?: React.FC<React.SVGProps<SVGSVGElement>>;
    iconRight?: React.FC<React.SVGProps<SVGSVGElement>>;
    loading?: boolean;
    as?: ButtonAsType;
}
export declare const buttonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ThemeProps & ButtonProps, any>>;
export declare const Button: React.FC<ButtonProps>;
