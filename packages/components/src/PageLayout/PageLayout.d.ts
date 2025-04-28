import React, { ReactNode } from 'react';
import { PageHeaderProps } from '../PageHeader';
export interface PageLayoutProps extends PageHeaderProps {
    showPrivacySettingsLink?: boolean;
    privacyManagerId?: string;
    children?: ReactNode;
}
declare const PageLayout: React.FC<PageLayoutProps>;
export default PageLayout;
