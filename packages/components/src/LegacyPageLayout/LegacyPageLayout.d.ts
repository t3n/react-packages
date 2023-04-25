import React from 'react';
import { LegacyAdName } from '../LegacyAd';
import { LegacyHeaderProps } from '../LegacyHeader';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    privacyManagerId: string;
    overflow?: string;
    adUnits?: LegacyAdName[];
    previewAdUnits?: boolean;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
