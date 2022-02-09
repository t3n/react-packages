import React from 'react';
import { PrivacyManagerType } from '../PageFooter';
export declare type MobileLinkType = {
    label: string;
    url: string;
    bold?: boolean;
    onClick?: (e: React.MouseEvent, privacySettingsModal?: PrivacyManagerType) => void;
}[];
export interface LegacyMobileFooterProps {
    privacySettingsModal?: PrivacyManagerType;
}
declare const LegacyMobileFooter: React.FC<LegacyMobileFooterProps>;
export default LegacyMobileFooter;
