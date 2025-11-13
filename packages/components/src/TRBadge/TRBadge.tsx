import React from 'react';
import styled from 'styled-components';
import { border, color, space, typography } from 'styled-system';

const TRBadgeWrapper = styled.span`
  ${({ theme }) =>
    typography({
      theme,
      fontSize: '0.75rem',
      fontWeight: 'bold',
      lineHeight: 1.5,
    })};
  ${({ theme }) =>
    border({
      theme,
      borderRadius: '2px',
      borderColor: 'text.primary',
      borderWidth: '1px',
      borderStyle: 'solid',
    })};
  ${({ theme }) =>
    color({
      theme,
      backgroundColor: 'background.primary',
      color: 'text.primary',
    })};
  ${({ theme }) => space({ theme, px: 1, mr: 2 })};
  white-space: nowrap;
`;

const TRBadge = () => {
  return <TRBadgeWrapper>MIT Technology Review</TRBadgeWrapper>;
};

export default TRBadge;
