import React from 'react';
import { PageHeaderProps } from '../PageHeader';
export interface PageLayoutProps extends PageHeaderProps {
    showHeader?: boolean;
    noContentPadding?: boolean;
    logoHref?: string;
    initialTransparent?: boolean;
    light?: boolean;
    showPrivacySettingsLink?: boolean;
    privacyManagerId?: string;
    headerContent?: JSX.Element;
    footerContent?: JSX.Element;
}
declare const PageLayout: React.FC<PageLayoutProps>;
export default PageLayout;
