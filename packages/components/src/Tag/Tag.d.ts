import React from 'react';
import { MarginProps } from 'styled-system';
export declare type TagColorVariant = 'primary' | 'secondary' | 'inverse' | 'black' | 'highlight';
export interface TagProps extends MarginProps {
    colorVariant?: TagColorVariant;
    link?: string;
    small?: boolean;
    icon?: JSX.Element;
    onClick?: () => void;
}
export declare const Tag: React.FC<TagProps>;
