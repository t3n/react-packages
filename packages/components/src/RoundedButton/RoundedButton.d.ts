import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type RoundedButtonAsType = 'button' | 'a';
export type RoundedButtonVariant = 'primary' | 'secondary';
export type RoundedButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'accent';
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
export declare const RoundedButtonStyles: import("styled-components").RuleSet<RoundedButtonProps & ThemeProps>;
export declare const StyledRoundedButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, RoundedButtonProps & ThemeProps>> & string;
declare const RoundedButton: React.FC<RoundedButtonProps>;
export default RoundedButton;
