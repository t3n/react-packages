import React from 'react';
import { PageHeader } from '../PageHeader';
import { PageHeaderProps } from '../PageHeader/PageHeader';
import { Content } from '../Content';

interface PageLayoutProps extends PageHeaderProps {
  showHeader: boolean;
  noContentPadding?: boolean;
  headerContent?: JSX.Element;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  showHeader,
  noContentPadding,
  headerContent,
  logoVariant,
  children
}) => {
  return (
    <>
      {showHeader && (
        <PageHeader logoVariant={logoVariant}>{headerContent}</PageHeader>
      )}
      <Content
        wide
        px={0}
        pt={showHeader ? (noContentPadding ? '3.5rem' : '5rem') : 0}
      >
        {children}
      </Content>
    </>
  );
};
