import React from 'react';
import { LegacyUserMenuProps } from '../../LegacyUserMenu';
export interface LegacyMobileNavProps {
    user: LegacyUserMenuProps['user'];
    headerCampaignUrl: string;
    headerCampaignImageMobile?: string;
}
export declare type MobileNavLinksType = {
    label: string;
    url: string;
    indicator?: boolean;
    bold?: boolean;
};
declare const LegacyMobileNav: React.FC<LegacyMobileNavProps>;
export default LegacyMobileNav;
