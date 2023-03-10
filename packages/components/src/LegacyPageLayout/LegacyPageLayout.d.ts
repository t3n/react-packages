import React from 'react';
import { LegacyHeaderProps } from '../LegacyHeader';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    privacyManagerId: string;
    showP0?: boolean;
    previewP0?: boolean;
    showP2?: boolean;
    previewP2?: boolean;
    showP13?: boolean;
    previewP13?: boolean;
    overflow?: string;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
