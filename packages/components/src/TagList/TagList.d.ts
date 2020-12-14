import React from 'react';
import { TagColorVariant } from '../Tag/Tag';
export interface TagListProps {
    tags: JSX.Element[];
    collapseAfter: number;
    small?: boolean;
    colorVariant?: TagColorVariant;
    initialCollapsed?: boolean;
}
export declare const TagList: React.FC<TagListProps>;
