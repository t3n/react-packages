import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './components/LegacyTagNav';
export declare const StickyHeader: import("styled-components").StyledComponent<"div", any, import("../Box").BoxProps, never>;
export declare const LegacyDesktopHeader: React.FC<{
    user: LegacyUserMenuProps['user'];
    userMenuLabelUrl: string;
    userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
    tags: TagNavTagsType[];
    headerCampaignUrl: string;
    headerCampaignImage: string;
}>;
