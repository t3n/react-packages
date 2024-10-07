import React from 'react';
export interface LegacyMobileHeaderProps {
    headerCampaignUrl: string;
    headerCampaignImageMobile?: string;
    userEmail?: string;
    isPlusUser?: boolean;
    isProMember?: boolean;
}
declare const LegacyMobileHeader: React.FC<LegacyMobileHeaderProps>;
export default LegacyMobileHeader;
