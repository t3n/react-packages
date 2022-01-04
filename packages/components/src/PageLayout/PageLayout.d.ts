import React from 'react';
import { PrivacyManagerType } from '../PageFooter';
import { PageHeaderProps } from '../PageHeader/PageHeader';
export interface PageLayoutProps extends PageHeaderProps {
    showHeader?: boolean;
    noContentPadding?: boolean;
    logoHref?: string;
    initialTransparent?: boolean;
    light?: boolean;
    contactLink?: string;
    showPrivacySettingsLink?: boolean;
    privacySettingsModal?: PrivacyManagerType;
    headerContent?: JSX.Element;
    footerContent?: JSX.Element;
}
export declare const PageLayout: React.FC<PageLayoutProps>;
