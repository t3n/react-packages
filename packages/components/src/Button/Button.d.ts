import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
export type ButtonAsType = 'button' | 'a';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'accent';
export type ButtonSizeVariant = 'small' | 'regular' | 'big';
interface BaseButtonProps extends MarginProps, WidthProps, PropsWithChildren {
    variant?: ButtonVariant;
    color?: ButtonColorVariant;
    size?: ButtonSizeVariant;
    iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    loading?: boolean;
    disabled?: boolean;
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
export declare const buttonStyles: import("styled-components").RuleSet<BaseButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
