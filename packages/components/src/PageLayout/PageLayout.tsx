import React from 'react';
import { PageHeader } from '../PageHeader';
import { PageHeaderProps } from '../PageHeader/PageHeader';
import { Content } from '../Content';

interface PageLayoutProps extends PageHeaderProps {
  showHeader: boolean;
  headerContent?: JSX.Element;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  showHeader,
  headerContent,
  logoVariant,
  children
}) => {
  return (
    <>
      {showHeader && (
        <PageHeader logoVariant={logoVariant}>{headerContent}</PageHeader>
      )}
      <Content wide px={0} pt={showHeader ? '3.5rem' : 0}>
        {children}
      </Content>
    </>
  );
};

export default PageLayout;
