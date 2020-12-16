import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './components/LegacyTagNav';
export declare const HeaderCampaign: import("styled-components").StyledComponent<"div", any, import("../Box").BoxProps, never>;
export declare const HeaderLink: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const LegacyHeader: React.FC<{
    user?: LegacyUserMenuProps['user'];
    userMenuLabelUrl: string;
    userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
    tags: TagNavTagsType[];
    headerCampaignUrl: string;
    headerCampaignImage: string;
    headerCampaignImageMobile?: string;
    newsIndicator?: number;
}>;
