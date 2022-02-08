import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const LegacyBreadcrumbWrapper = styled.nav`
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
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0) 80%,
      #fff
    );
    pointer-events: none;
  }
`;

const LegacyBreadcrumbList = styled.ul`
  list-style-type: none;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  ${({ theme }) => space({ pl: 0, m: 0, pb: 3, pr: 6, theme })}
`;

const LegacyBreadcrumb: React.FC = ({ children }) => {
  return (
    <LegacyBreadcrumbWrapper aria-label="Breadcrumb">
      <LegacyBreadcrumbList>{children}</LegacyBreadcrumbList>
    </LegacyBreadcrumbWrapper>
  );
};

export default LegacyBreadcrumb;
