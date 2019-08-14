import React from 'react';
import { PageHeaderProps } from '../PageHeader/PageHeader';
interface PageLayoutProps extends PageHeaderProps {
    showHeader: boolean;
}
declare const PageLayout: React.FC<PageLayoutProps>;
export default PageLayout;
