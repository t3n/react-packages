import React from 'react';
import { MarginProps, SizeProps } from 'styled-system';
interface BaseCardProps extends MarginProps {
    rounded?: boolean;
    big?: boolean;
    stretch?: boolean;
    elevate?: boolean;
    dashed?: boolean;
    splitted?: boolean;
    color?: string;
    width?: SizeProps['size'];
}
interface CardAsAnchorProps extends BaseCardProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseCardProps> {
    href: string;
    targetBlank?: boolean;
}
interface CardAsDivProps extends BaseCardProps, Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseCardProps> {
    href?: never;
    targetBlank?: never;
}
export type CardProps = CardAsAnchorProps | CardAsDivProps;
declare const Card: {
    ({ ref, rounded, color, width, mb, ...props }: CardProps & {
        ref?: React.RefObject<HTMLAnchorElement | HTMLDivElement | null>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Card;
