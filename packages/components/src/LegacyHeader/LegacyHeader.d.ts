import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './components/LegacyTagNav';
export interface LegacyHeaderProps {
    user?: LegacyUserMenuProps['user'];
    userMenuLabelUrl: string;
    userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
    tags: TagNavTagsType[];
    tagsLoading?: boolean;
    headerCampaignUrl: string;
    headerCampaignImage: string;
    headerCampaignImageMobile?: string;
    newsIndicator?: number;
    proIndicator?: number;
    showAds?: boolean;
    adsPreview?: boolean;
}
export declare const LegacyHeader: React.FC<LegacyHeaderProps>;
