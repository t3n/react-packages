import React, { ReactNode } from 'react';
import { LegacyAdName } from '../LegacyAd';
import { LegacyHeaderProps } from '../LegacyHeader';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    privacyManagerId: string;
    overflow?: string;
    adUnits?: LegacyAdName[];
    previewAdUnits?: boolean;
    userEmail?: string;
    isProMember?: boolean;
    userMenuItems?: ReactNode[];
    children?: ReactNode;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
