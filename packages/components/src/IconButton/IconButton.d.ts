import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type IconButtonAsType = 'button' | 'a';
export type IconButtonVariant = 'primary' | 'secondary';
export type IconButtonColorVariant = 'default' | 'inverse' | 'highlight';
export type IconButtonSizeVariant = 'small' | 'regular' | 'big';
export interface IconButtonBaseProps extends MarginProps, WidthProps {
    size?: IconButtonSizeVariant;
    variant?: IconButtonVariant;
    color?: IconButtonColorVariant;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: string;
    loading?: boolean;
    expanded?: boolean;
    children?: ReactNode;
}
export interface IconButtonButtonTypeProps extends IconButtonBaseProps, Omit<ButtonHTMLAttributes<any>, 'color'> {
    as?: 'button';
}
export interface IconButtonATypeProps extends IconButtonBaseProps, Omit<AnchorHTMLAttributes<any>, 'color' | 'type'> {
    as?: 'a';
}
export type IconButtonProps = IconButtonATypeProps | IconButtonButtonTypeProps;
export declare const iconButtonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ThemeProps & IconButtonProps, any>>;
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
