import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type ButtonAsType = 'button' | 'a';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'accent';
export type ButtonSizeVariant = 'small' | 'regular' | 'big';
export interface ButtonProps extends ButtonHTMLAttributes<any>, Omit<AnchorHTMLAttributes<any>, 'type'>, MarginProps, WidthProps {
    variant?: ButtonVariant;
    color?: ButtonColorVariant;
    size?: ButtonSizeVariant;
    iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    loading?: boolean;
    as?: ButtonAsType;
    children?: ReactNode;
}
export declare const buttonStyles: import("styled-components").RuleSet<ButtonProps & ThemeProps>;
declare const Button: ({ children, loading, iconLeft, iconRight, size, color, variant, href, as, onClick, disabled, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
