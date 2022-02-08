import React, { useEffect, useState } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';
import styled from 'styled-components';

import Content from '../Content';
import PageFooter, { PrivacyManagerType } from '../PageFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';

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

const PageLayout: React.FC<PageLayoutProps> = ({
  showHeader = true,
  logoHref,
  noContentPadding,
  headerContent,
  initialTransparent = false,
  footerContent,
  contactLink = 'mailto:support@t3n.de',
  showPrivacySettingsLink,
  privacySettingsModal,
  light,
  children,
}) => {
  const y = useScrollYPosition();
  const [transparentHeader, setTransparentHeader] =
    useState(initialTransparent);

  useEffect(() => {
    // if the header is initial transparent we need to track the scroll position
    if (initialTransparent) {
      if (y > 20 && transparentHeader) {
        setTransparentHeader(false);
      } else if (y < 20 && !transparentHeader) {
        setTransparentHeader(true);
      }
    }
  }, [initialTransparent, y, transparentHeader]);

  return (
    <PageLayoutContainer>
      {showHeader && (
        <PageHeader
          logoHref={logoHref}
          transparent={transparentHeader}
          light={light}
        >
          {headerContent}
        </PageHeader>
      )}
      {initialTransparent ? (
        children
      ) : (
        <Content
          wide
          px={0}
          pt={
            showHeader ? (noContentPadding ? 8 : 9) : noContentPadding ? 0 : 3
          }
          pb={noContentPadding ? 0 : 3}
        >
          {children}
        </Content>
      )}
      <PageFooter
        contactLink={contactLink}
        showPrivacySettingsLink={showPrivacySettingsLink}
        privacySettingsModal={privacySettingsModal}
      >
        {footerContent}
      </PageFooter>
    </PageLayoutContainer>
  );
};

export default PageLayout;
