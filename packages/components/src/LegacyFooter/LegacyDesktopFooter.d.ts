import React from 'react';
import { PrivacyManagerType } from '../PageFooter';
export declare type DesktopLinkGroupsType = {
    label: string;
    links: {
        label: string;
        title?: string;
        url: string;
        target?: string;
        rel?: string;
        bold?: boolean;
        onClick?: (e: React.MouseEvent, privacySettingsModal?: PrivacyManagerType) => void;
    }[];
}[];
export interface LegacyDesktopFooterProps {
    privacySettingsModal?: PrivacyManagerType;
}
declare const LegacyDesktopFooter: React.FC<LegacyDesktopFooterProps>;
export default LegacyDesktopFooter;
