import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { border, color, compose, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Logo from '../Logo';

export interface PageHeaderProps {
  transparent?: boolean;
  light?: boolean;
  logoHref?: string;
  children?: ReactNode;
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

  ${({ theme, light }) =>
    border({
      theme,
      borderBottom: light ? '1px solid' : 'none',
      borderBottomColor: 'shades.grey232',
    })}

  ${({ theme, transparent, light }) =>
    compose(
      color,
      space,
    )({
      theme,
      color: 'text.inverse',
      bg:
        // eslint-disable-next-line no-nested-ternary
        transparent
          ? 'transparent'
          : light
            ? 'brand.white'
            : 'background.highlight',
      px: [3, 3, 3, 3, 8],
    })}

  ${Logo} {
    width: 7.5rem;
    height: 2.5rem;

    > path {
      fill: ${({ theme, light }) =>
        light ? theme.colors.brand.red : theme.colors.brand.white};
    }
  }
`;

const PageHeader: React.FC<PageHeaderProps> = ({
  transparent,
  light,
  logoHref,
  children,
}) => (
  <PageHeaderWrapper transparent={transparent} light={light}>
    {logoHref ? (
      <a
        style={{ display: 'flex' }}
        href={logoHref}
        aria-label="t3n - digital pioneers"
      >
        <Logo />
      </a>
    ) : (
      <Logo />
    )}
    {children}
  </PageHeaderWrapper>
);

export default PageHeader;
