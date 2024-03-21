import React, { ReactNode } from 'react';
export interface PageHeaderProps {
    transparent?: boolean;
    light?: boolean;
    logoHref?: string;
    children?: ReactNode;
}
declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
