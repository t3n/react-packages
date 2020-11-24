import React from 'react';
import { TagColorVariant } from '../../Tag';
export declare type TagNavTagsType = {
    label: string;
    url: string;
    variant?: TagColorVariant;
}[];
export declare const LegacyTagNav: React.FC<{
    tags: TagNavTagsType;
}>;
