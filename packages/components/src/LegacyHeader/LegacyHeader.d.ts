import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './LegacyTagNav';
export declare const HeaderLink: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const LegacyHeader: React.FC<{
    user: LegacyUserMenuProps['user'];
    userMenuLabelUrl: string;
    userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
    tagNavTags: TagNavTagsType;
    headerCampaignUrl: string;
    headerCampaignImage: string;
    headerCampaignImageMobile?: string;
}>;
