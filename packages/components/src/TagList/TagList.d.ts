import React from 'react';
import { TagColorVariant } from '../Tag/Tag';
export interface TagListProps {
    tags: JSX.Element[];
    collapseAfter: number;
    colorVariant?: TagColorVariant;
    initialCollapsed?: boolean;
}
export declare const TagList: React.FC<TagListProps>;
