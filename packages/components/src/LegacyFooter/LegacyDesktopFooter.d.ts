import React from 'react';
export type DesktopLinkGroupsType = {
    label: string;
    links: {
        label: string;
        title?: string;
        url: string;
        target?: string;
        rel?: string;
        bold?: boolean;
        onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
    }[];
}[];
export interface LegacyDesktopFooterProps {
    privacyManagerId: string;
}
declare const LegacyDesktopFooter: React.FC<LegacyDesktopFooterProps>;
export default LegacyDesktopFooter;
