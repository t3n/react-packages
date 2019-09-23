import React from 'react';
import styled from 'styled-components';
import { PageHeader } from '../PageHeader';
import { PageHeaderProps } from '../PageHeader/PageHeader';
import { Content } from '../Content';
import { PageFooter } from '../PageFooter';

export interface PageLayoutProps extends PageHeaderProps {
  showHeader?: boolean;
  noContentPadding?: boolean;
  headerContent?: JSX.Element;
  footerContent?: JSX.Element;
}

const PageLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  ${Content} {
    flex-grow: 1;
  }
`;

export const PageLayout: React.FC<PageLayoutProps> = ({
  showHeader = true,
  noContentPadding,
  headerContent,
  logoVariant,
  footerContent,
  children
}) => {
  return (
    <PageLayoutContainer>
      {showHeader && (
        <PageHeader logoVariant={logoVariant}>{headerContent}</PageHeader>
      )}
      <Content
        wide
        px={0}
        pt={showHeader ? (noContentPadding ? 7 : 9) : noContentPadding ? 0 : 2}
        pb={noContentPadding ? 0 : 2}
      >
        {children}
      </Content>
      <PageFooter contactLink="mailto:support@t3n.de">
        {footerContent}
      </PageFooter>
    </PageLayoutContainer>
  );
};
