import { type JSX } from 'react';
import { TagColorVariant } from '../Tag';
export interface TagListProps {
    tags: JSX.Element[];
    collapseAfter: number;
    small?: boolean;
    colorVariant?: TagColorVariant;
    initialCollapsed?: boolean;
}
declare const TagList: ({ initialCollapsed, collapseAfter, small, colorVariant, tags, }: TagListProps) => import("react/jsx-runtime").JSX.Element;
export default TagList;
