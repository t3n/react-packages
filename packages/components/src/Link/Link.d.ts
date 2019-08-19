import React, { ReactNode } from 'react';
import { TextColorProps } from 'styled-system';
import { TextProps } from '../Text/Text';
export declare type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export declare type LinkUnderlineType = 'none' | 'hover' | 'always';
export interface LinkProps extends TextColorProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    variant?: LinkVariantType;
    underline?: LinkUnderlineType;
    small?: TextProps['small'];
    hoverColor?: TextColorProps['color'];
    focusColor?: TextColorProps['color'];
    children: ReactNode;
}
declare const Link: import("styled-components").StyledComponent<"p", any, {
    as: "p" | "span";
} & TextProps & {
    as: string;
} & LinkProps, "as">;
export default Link;
