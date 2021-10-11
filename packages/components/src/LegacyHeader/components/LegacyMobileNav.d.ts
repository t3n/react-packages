import React from 'react';
import { LegacyUserMenuProps } from '../../LegacyUserMenu';
declare const LegacyMobileNav: React.FC<{
    user: LegacyUserMenuProps['user'];
    newsIndicator?: number;
    proIndicator?: number;
    headerCampaignUrl: string;
    headerCampaignImageMobile?: string;
}>;
export default LegacyMobileNav;
