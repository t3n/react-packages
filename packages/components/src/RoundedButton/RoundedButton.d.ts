import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type RoundedButtonAsType = 'button' | 'a';
export type RoundedButtonVariant = 'primary' | 'secondary';
export type RoundedButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'signal';
export type RoundedButtonSizeVariant = 'small' | 'regular' | 'big';
export interface RoundedButtonBaseProps extends MarginProps, WidthProps {
    size?: RoundedButtonSizeVariant;
    variant?: RoundedButtonVariant;
    color?: RoundedButtonColorVariant;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: ReactNode;
    loading?: boolean;
    expanded?: boolean;
    children?: ReactNode;
}
export interface RoundedButtonButtonTypeProps extends RoundedButtonBaseProps, Omit<ButtonHTMLAttributes<any>, 'color'> {
    as?: 'button';
}
export interface RoundedButtonATypeProps extends RoundedButtonBaseProps, Omit<AnchorHTMLAttributes<any>, 'color' | 'type'> {
    as?: 'a';
}
export type RoundedButtonProps = RoundedButtonATypeProps | RoundedButtonButtonTypeProps;
export declare const RoundedButtonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ThemeProps & RoundedButtonProps, any>>;
export declare const StyledRoundedButton: import("styled-components").StyledComponent<"button", any, RoundedButtonProps, never>;
declare const RoundedButton: React.FC<RoundedButtonProps>;
export default RoundedButton;
