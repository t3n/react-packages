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
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
`;

export interface PageHeaderProps {
  logoVariant?: 'default';
}

export const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
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
