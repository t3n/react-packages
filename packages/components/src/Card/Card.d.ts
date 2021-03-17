import React, { ReactNode } from 'react';
import { SizeProps, MarginProps } from 'styled-system';
export interface CardProps extends MarginProps, React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
    rounded?: boolean;
    big?: boolean;
    stretch?: boolean;
    elevate?: boolean;
    dashed?: boolean;
    splitted?: boolean;
    href?: string | false;
    targetBlank?: boolean;
    color?: string;
    width?: SizeProps['size'];
    children?: ReactNode;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement | HTMLAnchorElement>>;
