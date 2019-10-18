import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollYPosition } from 'react-use-scroll-position';
import { PageHeader } from '../PageHeader';
import { PageHeaderProps } from '../PageHeader/PageHeader';
import { Content } from '../Content';
import { PageFooter } from '../PageFooter';

export interface PageLayoutProps extends PageHeaderProps {
  showHeader?: boolean;
  noContentPadding?: boolean;
  initialTransparent?: boolean;
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
  initialTransparent = false,
  footerContent,
  children
}) => {
  const y = useScrollYPosition();
  const [transparentHeader, setTransparentHeader] = useState(
    initialTransparent
  );

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
        <PageHeader transparent={transparentHeader}>{headerContent}</PageHeader>
      )}
      {initialTransparent ? (
        children
      ) : (
        <Content
          wide
          px={0}
          pt={
            showHeader ? (noContentPadding ? 8 : 10) : noContentPadding ? 0 : 3
          }
          pb={noContentPadding ? 0 : 3}
        >
          {children}
        </Content>
      )}
      <PageFooter contactLink="mailto:support@t3n.de">
        {footerContent}
      </PageFooter>
    </PageLayoutContainer>
  );
};
