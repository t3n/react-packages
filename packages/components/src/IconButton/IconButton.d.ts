import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export declare type IconButtonAsType = 'button' | 'a';
export declare type IconButtonVariant = 'primary' | 'secondary';
export declare type IconButtonColorVariant = 'default' | 'inverse' | 'highlight';
export declare type IconButtonSizeVariant = 'small' | 'regular' | 'big';
interface IconButtonBaseProps extends MarginProps, WidthProps {
    size?: IconButtonSizeVariant;
    variant?: IconButtonVariant;
    colorVariant?: IconButtonColorVariant;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: string;
    loading?: boolean;
    expanded?: boolean;
}
interface IconButtonButtonTypeProps extends IconButtonBaseProps, ButtonHTMLAttributes<any> {
    as?: 'button';
}
interface IconButtonATypeProps extends IconButtonBaseProps, Omit<AnchorHTMLAttributes<any>, 'type'> {
    as?: 'a';
}
export declare type IconButtonProps = IconButtonATypeProps | IconButtonButtonTypeProps;
export declare const iconButtonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<(ThemeProps & IconButtonButtonTypeProps) | (ThemeProps & IconButtonATypeProps), any>>;
export declare const IconButton: React.FC<IconButtonProps>;
export {};
