import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const LegacyBreadcrumbWrapper = styled.nav<{ secondary?: boolean }>`
  height: 28px;
  position: relative;
  ${({ theme }) => space({ mb: 4, theme })}

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    background: ${({ secondary }) =>
      secondary
        ? css`linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0) 80%,
      #f4f4f4
    )`
        : css`linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0) 80%,
      #fff
    )`};
  }
`;

const LegacyBreadcrumbList = styled.ul`
  list-style-type: none;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  ${({ theme }) => space({ pl: 0, m: 0, pb: 3, pr: 6, theme })}
`;

const LegacyBreadcrumb: React.FC<{ secondary?: boolean }> = ({
  secondary,
  children,
}) => {
  return (
    <LegacyBreadcrumbWrapper aria-label="Breadcrumb" secondary={secondary}>
      <LegacyBreadcrumbList>{children}</LegacyBreadcrumbList>
    </LegacyBreadcrumbWrapper>
  );
};

export default LegacyBreadcrumb;
