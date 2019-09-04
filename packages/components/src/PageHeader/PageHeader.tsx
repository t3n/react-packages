import React from 'react';
import styled from 'styled-components';
import { space, color, compose } from 'styled-system';
import { Logo } from '../Logo';

const PageHeadderWrapper = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) =>
    compose(
      color,
      space
    )({
      theme,
      color: 'text.inverse',
      bg: 'background.highlight',
      px: [3]
    })}

  ${Logo} {
    width: auto;
    height: 2.5rem;
  }
`;

export interface PageHeaderProps {
  logoVariant?: 'default';
}

export const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <PageHeadderWrapper>
      <Logo />
      {children}
    </PageHeadderWrapper>
  );
};
