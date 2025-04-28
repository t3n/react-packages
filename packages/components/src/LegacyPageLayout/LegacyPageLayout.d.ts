import React, { ReactNode } from 'react';
import { PageHeaderProps } from '../PageHeader';
export interface LegacyPageLayoutProps extends PageHeaderProps {
    privacyManagerId: string;
    children?: ReactNode;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
