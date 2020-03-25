import React from 'react';
import styled from 'styled-components';
import { space, color, compose } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { Logo } from '../Logo';

export interface PageHeaderProps {
  transparent?: boolean;
  logoHref?: string;
}

const PageHeaderWrapper = styled.div<PageHeaderProps & ThemeProps>`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme, transparent }) =>
    compose(
      color,
      space
    )({
      theme,
      color: 'text.inverse',
      bg: transparent ? 'transparent' : 'background.highlight',
      px: [3, 3, 3, 3, 8],
    })}

  ${Logo} {
    width: 7.5rem;
    height: 2.5rem;
  }
`;

export const PageHeader: React.FC<PageHeaderProps> = ({
  transparent,
  logoHref,
  children,
}) => {
  return (
    <PageHeaderWrapper transparent={transparent}>
      {logoHref ? (
        <a style={{ display: 'flex' }} href={logoHref}>
          <Logo />
        </a>
      ) : (
        <Logo />
      )}
      {children}
    </PageHeaderWrapper>
  );
};
