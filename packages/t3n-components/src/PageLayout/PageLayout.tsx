import React, { Fragment } from 'react';
import { PageHeader } from '../PageHeader';
import { PageHeaderProps } from '../PageHeader/PageHeader';
import { Content } from '../Content';

interface PageLayoutProps extends PageHeaderProps {
  showHeader: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  showHeader,
  logoVariant,
  children
}) => {
  return (
    <Fragment>
      {showHeader && <PageHeader logoVariant={logoVariant} />}
      <Content wide px={0} pt={showHeader ? '3.5rem' : 0}>
        {children}
      </Content>
    </Fragment>
  );
};

export default PageLayout;
