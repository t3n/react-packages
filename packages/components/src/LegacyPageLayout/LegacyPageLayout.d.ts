import React, { ReactNode } from 'react';
import { AdName } from '../Ad';
import { PageHeaderProps } from '../PageHeader';
export interface LegacyPageLayoutProps extends PageHeaderProps {
    privacyManagerId: string;
    overflow?: string;
    adUnits?: AdName[];
    previewAdUnits?: boolean;
    isProMember?: boolean;
    children?: ReactNode;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
