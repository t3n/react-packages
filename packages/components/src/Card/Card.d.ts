import React from 'react';
import { MarginProps, SizeProps } from 'styled-system';
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
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement | HTMLAnchorElement>>;
export default Card;
