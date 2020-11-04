import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export declare type IconButtonAsType = 'button' | 'a';
export declare type IconButtonVariant = 'primary' | 'secondary';
export declare type IconButtonColorVariant = 'default' | 'inverse' | 'highlight';
export declare type IconButtonSizeVariant = 'small' | 'regular' | 'big';
export interface IconButtonProps extends ButtonHTMLAttributes<any>, Omit<AnchorHTMLAttributes<any>, 'type'>, MarginProps, WidthProps {
    size?: IconButtonSizeVariant;
    variant?: IconButtonVariant;
    color?: IconButtonColorVariant;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    as?: IconButtonAsType;
    label?: string;
    loading?: boolean;
    alwaysShowText?: boolean;
}
export declare const iconButtonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ThemeProps & IconButtonProps, any>>;
export declare const IconButton: React.FC<IconButtonProps>;
