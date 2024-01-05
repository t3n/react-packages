import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './components/LegacyTagNav';
export interface LegacyDesktopHeaderProps {
    user: LegacyUserMenuProps['user'];
    userMenuLabelUrl: string;
    userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
    tags: TagNavTagsType[];
    tagsLoading?: boolean;
    headerCampaignUrl: string;
    headerCampaignImage: string;
    showAds?: boolean;
    adsPreview?: boolean;
}
export declare const StickyHeader: import("styled-components").StyledComponent<"div", any, import("../Box").BoxProps, never>;
declare const LegacyDesktopHeader: React.FC<LegacyDesktopHeaderProps>;
export default LegacyDesktopHeader;
