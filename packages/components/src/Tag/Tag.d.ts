import React from 'react';
import { MarginProps } from 'styled-system';
export declare type TagColorVariant = 'primary' | 'secondary' | 'inverse' | 'black' | 'highlight' | 'warning' | 'notice' | 'success' | 'error';
export interface TagProps extends MarginProps {
    colorVariant?: TagColorVariant;
    link?: string;
    small?: boolean;
    icon?: JSX.Element;
    onClick?: () => void;
}
declare const Tag: React.FC<TagProps>;
export default Tag;
