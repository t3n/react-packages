import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  BackgroundColorProps,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  flexbox
} from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { Logo } from '../Logo';

interface PageHeaderWrapperProps
  extends ThemeProps,
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    BackgroundColorProps {}

const PageHeadderWrapper = styled.div<PageHeaderWrapperProps>`
  ${flexbox}
  ${space}
  ${layout}
  ${color}
`;

interface PageHeaderProps {
  logoVariant?: 'default';
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <PageHeadderWrapper
      height="3.5rem"
      pr={3}
      pl={3}
      color="text.inverse"
      bg="background.highlight"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo height="40" variant="default" />
      {children}
    </PageHeadderWrapper>
  );
};

export default PageHeader;
