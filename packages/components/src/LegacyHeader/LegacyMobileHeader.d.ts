import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
declare const LegacyMobileHeader: React.FC<{
    user: LegacyUserMenuProps['user'];
    headerCampaignUrl: string;
    headerCampaignImageMobile?: string;
    newsIndicator?: number;
}>;
export default LegacyMobileHeader;