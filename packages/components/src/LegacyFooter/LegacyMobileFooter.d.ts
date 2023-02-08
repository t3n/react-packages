import React from 'react';
export declare type MobileLinkType = {
    label: string;
    url: string;
    bold?: boolean;
    onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
}[];
export interface LegacyMobileFooterProps {
    privacyManagerId: string;
}
declare const LegacyMobileFooter: React.FC<LegacyMobileFooterProps>;
export default LegacyMobileFooter;
