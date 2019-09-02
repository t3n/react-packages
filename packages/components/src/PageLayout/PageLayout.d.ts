import React from 'react';
import { PageHeaderProps } from '../PageHeader/PageHeader';
interface PageLayoutProps extends PageHeaderProps {
    showHeader?: boolean;
    noContentPadding?: boolean;
    headerContent?: JSX.Element;
    footerContent?: JSX.Element;
}
export declare const PageLayout: React.FC<PageLayoutProps>;
export {};
