import React, { ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export type TagColorVariant = 'primary' | 'secondary' | 'inverse' | 'black' | 'highlight' | 'warning' | 'notice' | 'success' | 'error';
export interface TagProps extends MarginProps {
    colorVariant?: TagColorVariant;
    link?: string;
    small?: boolean;
    icon?: JSX.Element;
    onClick?: () => void;
    children?: ReactNode;
}
declare const Tag: React.FC<TagProps>;
export default Tag;
