import React, { ReactNode } from 'react';
import { TagNavTagsType } from './components/LegacyTagNav';
export interface LegacyHeaderProps {
    tags: TagNavTagsType[];
    tagsLoading?: boolean;
    headerCampaignUrl: string;
    headerCampaignImage: string;
    headerCampaignImageMobile?: string;
    showAds?: boolean;
    adsPreview?: boolean;
    userEmail?: string;
    isProMember?: boolean;
    userMenuItems?: ReactNode[];
}
declare const LegacyHeader: React.FC<LegacyHeaderProps>;
export default LegacyHeader;
