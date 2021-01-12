import React from 'react';
import { TagColorVariant } from '../../Tag';
export declare const SearchIcon: React.FC;
export declare const SearchInput: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const SearchForm: import("styled-components").StyledComponent<"form", any, {}, never>;
export declare const SearchButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare type TagNavTagsType = {
    label: string;
    url: string;
    variant?: TagColorVariant;
};
export declare const LegacyTagNav: React.FC<{
    tags: TagNavTagsType[];
}>;