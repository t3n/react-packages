import { ReactElement } from 'react';
import { TagColorVariant } from '../Tag';
export interface TagListProps {
    tags: ReactElement[];
    collapseAfter: number;
    small?: boolean;
    colorVariant?: TagColorVariant;
    initialCollapsed?: boolean;
}
declare const TagList: ({ initialCollapsed, collapseAfter, small, colorVariant, tags, }: TagListProps) => import("react/jsx-runtime").JSX.Element;
export default TagList;
