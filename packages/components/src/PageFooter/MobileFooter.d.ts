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
export interface MobileFooterProps {
    privacyManagerId: string;
}
declare const MobileFooter: React.FC<MobileFooterProps>;
export default MobileFooter;
