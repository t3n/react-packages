import React from 'react';
import { LegacyHeaderProps } from '../LegacyHeader';
import { PrivacyManagerType } from '../PageFooter';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    showP0?: boolean;
    previewP0?: boolean;
    showP2?: boolean;
    previewP2?: boolean;
    showP13?: boolean;
    previewP13?: boolean;
    privacySettingsModal?: PrivacyManagerType;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
