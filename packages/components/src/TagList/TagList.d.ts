import React from 'react';
import { TagColorVariant } from '../Tag';
export interface TagListProps {
    tags: JSX.Element[];
    collapseAfter: number;
    small?: boolean;
    colorVariant?: TagColorVariant;
    initialCollapsed?: boolean;
}
declare const TagList: React.FC<TagListProps>;
export default TagList;
