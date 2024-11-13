import React, { ReactNode } from 'react';
import { AdName } from '../Ad';
import { LegacyHeaderProps } from '../LegacyHeader';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    privacyManagerId: string;
    overflow?: string;
    adUnits?: AdName[];
    previewAdUnits?: boolean;
    userEmail?: string;
    isPlusUser?: boolean;
    isProMember?: boolean;
    userMenuItems?: ReactNode[];
    children?: ReactNode;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
