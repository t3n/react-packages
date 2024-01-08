import React from 'react';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
export interface LegacyMobileHeaderProps {
    user: LegacyUserMenuProps['user'];
    headerCampaignUrl: string;
    headerCampaignImageMobile?: string;
}
declare const LegacyMobileHeader: React.FC<LegacyMobileHeaderProps>;
export default LegacyMobileHeader;
