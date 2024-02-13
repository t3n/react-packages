import React, { ReactNode } from 'react';
import { TagNavTagsType } from './components/LegacyTagNav';
export interface LegacyDesktopHeaderProps {
    tags: TagNavTagsType[];
    tagsLoading?: boolean;
    headerCampaignUrl: string;
    headerCampaignImage: string;
    showAds?: boolean;
    adsPreview?: boolean;
    userEmail?: string;
    isProMember?: boolean;
    userMenuItems?: ReactNode[];
}
export declare const StickyHeader: import("styled-components").StyledComponent<"div", any, import("../Box").BoxProps, never>;
declare const LegacyDesktopHeader: React.FC<LegacyDesktopHeaderProps>;
export default LegacyDesktopHeader;
