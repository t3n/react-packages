import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type ButtonAsType = 'button' | 'a';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'accent';
export type ButtonSizeVariant = 'small' | 'regular' | 'big';
interface BaseButtonProps extends MarginProps, WidthProps {
    variant?: ButtonVariant;
    color?: ButtonColorVariant;
    size?: ButtonSizeVariant;
    iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    loading?: boolean;
    disabled?: boolean;
    children?: ReactNode;
}
interface AnchorButtonProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    as?: 'a';
    href: string;
}
interface ButtonButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    as?: 'button';
    href?: never;
}
export type ButtonProps = AnchorButtonProps | ButtonButtonProps;
export declare const buttonStyles: import("styled-components").RuleSet<ButtonProps & ThemeProps>;
declare const Button: ({ children, loading, iconLeft, iconRight, size, color, variant, as, onClick, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
