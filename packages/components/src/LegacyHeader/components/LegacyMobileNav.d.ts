import React from 'react';
export interface LegacyMobileNavProps {
    headerCampaignUrl: string;
    headerCampaignImageMobile?: string;
    userEmail?: string;
    isPlusUser?: boolean;
    isProMember?: boolean;
}
export type MobileNavLinksType = {
    label: string;
    url: string;
    indicator?: boolean;
    bold?: boolean;
};
declare const LegacyMobileNav: React.FC<LegacyMobileNavProps>;
export default LegacyMobileNav;
