import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type ButtonAsType = 'button' | 'a';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'signal';
export type ButtonSizeVariant = 'small' | 'regular' | 'big';
export interface ButtonProps extends ButtonHTMLAttributes<any>, Omit<AnchorHTMLAttributes<any>, 'type'>, MarginProps, WidthProps {
    variant?: ButtonVariant;
    color?: ButtonColorVariant;
    size?: ButtonSizeVariant;
    iconLeft?: React.FC<React.SVGProps<SVGSVGElement>>;
    iconRight?: React.FC<React.SVGProps<SVGSVGElement>>;
    loading?: boolean;
    as?: ButtonAsType;
    children?: ReactNode;
}
export declare const buttonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ThemeProps & ButtonProps, any>>;
declare const Button: React.FC<ButtonProps>;
export default Button;
