import React, { useState } from 'react';
import styled from 'styled-components';
import { MaterialPlayArrow } from '@t3n/icons';
import { color, typography } from 'styled-system';
import { Box } from '../Box';
import { Icon } from '../Icon';

export interface LegacyPaginationProps {
  page: number;
  pages: number;
  onClick: (page: number) => void;
}

export interface LegacyPaginationContainerProps {
  disabled?: boolean;
}

const RotatedIcon = styled(Icon)`
  transform: rotate(180deg);
`;

const LegacyPaginationContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  mr: 2,
})<LegacyPaginationContainerProps>`
  height: 3.75rem;
  width: 3.75rem;
  ${({ theme, disabled }) =>
    color({
      theme,
      bg: 'shades.grey232',
      color: disabled ? 'text.secondary' : 'text.highlight',
    })}
  ${({ theme }) => typography({ theme, fontSize: 0 })}

  &:hover {
    ${({ theme, disabled }) =>
      color({ theme, bg: disabled ? 'shades.grey232' : 'shades.grey204' })}
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')}
  }

  &:last-child {
    margin-right: 0;
  }
`;

const LegacyPaginationElipses = () => (
  <Box mr={2} height="3.75rem" display="flex" alignItems="center">
    <span>...</span>
  </Box>
);

export const LegacyPagination: React.FC<LegacyPaginationProps> = ({
  page,
  pages,
  onClick,
}) => {
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    <Box display="flex">
      {page !== 1 && (
        <LegacyPaginationContainer onClick={() => onClick(page - 1)}>
          <RotatedIcon
            height="1rem"
            width="1rem"
            component={MaterialPlayArrow}
          />
        </LegacyPaginationContainer>
      )}
      {prevPage > 1 && (
        <LegacyPaginationContainer onClick={() => onClick(1)}>
          1
        </LegacyPaginationContainer>
      )}
      {prevPage - 1 > 1 && <LegacyPaginationElipses />}

      {prevPage - 1 > 1 && page === pages && (
        <LegacyPaginationContainer onClick={() => onClick(prevPage - 1)}>
          {prevPage - 1}
        </LegacyPaginationContainer>
      )}
      {prevPage !== 0 && (
        <LegacyPaginationContainer onClick={() => onClick(prevPage)}>
          {prevPage}
        </LegacyPaginationContainer>
      )}
      <LegacyPaginationContainer disabled>{page}</LegacyPaginationContainer>
      {nextPage !== pages && page !== pages && (
        <LegacyPaginationContainer onClick={() => onClick(nextPage)}>
          {nextPage}
        </LegacyPaginationContainer>
      )}
      {page === 1 && nextPage + 1 < pages && (
        <LegacyPaginationContainer onClick={() => onClick(nextPage + 1)}>
          {nextPage + 1}
        </LegacyPaginationContainer>
      )}
      {pages - nextPage > 1 && nextPage + 1 !== pages && (
        <LegacyPaginationElipses />
      )}
      {page !== pages && (
        <LegacyPaginationContainer onClick={() => onClick(pages)}>
          {pages}
        </LegacyPaginationContainer>
      )}
      {page !== pages && (
        <LegacyPaginationContainer onClick={() => onClick(page + 1)}>
          <Icon height="1rem" width="1rem" component={MaterialPlayArrow} />
        </LegacyPaginationContainer>
      )}
    </Box>
  );
};
