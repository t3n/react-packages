import React from 'react';
export type MobileLinkType = {
    label: string;
    url: string;
    title?: string;
    bold?: boolean;
    target?: string;
    rel?: string;
    onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
}[];
export interface LegacyMobileFooterProps {
    privacyManagerId: string;
}
declare const LegacyMobileFooter: React.FC<LegacyMobileFooterProps>;
export default LegacyMobileFooter;
