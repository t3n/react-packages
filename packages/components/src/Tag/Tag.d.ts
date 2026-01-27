import { PropsWithChildren, ReactElement } from 'react';
import { MarginProps } from 'styled-system';
export type TagColorVariant = 'primary' | 'secondary' | 'inverse' | 'black' | 'highlight' | 'warning' | 'notice' | 'success' | 'error';
export interface TagProps extends MarginProps, PropsWithChildren {
    colorVariant?: TagColorVariant;
    link?: string;
    small?: boolean;
    icon?: ReactElement;
    onClick?: () => void;
}
declare const Tag: ({ children, link, colorVariant, onClick, icon, small, ...rest }: TagProps) => import("react/jsx-runtime").JSX.Element;
export default Tag;
