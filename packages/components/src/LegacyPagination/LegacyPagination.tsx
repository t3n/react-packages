import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

import { MaterialPlayArrow } from '@t3n/icons';

import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';

export interface LegacyPaginationProps {
  currentPage: number;
  totalPages: number;
  maxPageLinks: number;
  onClick: (currentPage: number) => void;
}

export interface LegacyPaginationContainerProps {
  disabled?: boolean;
}

const RotatedIcon = styled(Icon)`
  transform: rotate(180deg);
`;

const LegacyPaginationContainer = styled(Box)<LegacyPaginationContainerProps>`
  height: 3.75rem;
  width: 3.75rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  ${({ theme }) => space({ theme, mr: '10px' })}
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
  <Box
    mr={2}
    width="1.875rem"
    height="3.75rem"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text secondary as="span">
      ...
    </Text>
  </Box>
);

const LegacyPagination = ({
  currentPage,
  totalPages,
  maxPageLinks,
  onClick,
}: LegacyPaginationProps) => {
  const prevPage = currentPage - 1;

  return (
    <Box display="flex">
      {currentPage !== 1 && (
        <LegacyPaginationContainer onClick={() => onClick(currentPage - 1)}>
          <RotatedIcon
            height="1rem"
            width="1rem"
            component={MaterialPlayArrow}
          />
        </LegacyPaginationContainer>
      )}
      {prevPage >= 1 && (
        <LegacyPaginationContainer onClick={() => onClick(1)}>
          1
        </LegacyPaginationContainer>
      )}
      {currentPage - maxPageLinks - 1 > 1 && <LegacyPaginationElipses />}
      {currentPage === totalPages && maxPageLinks === 1 && totalPages > 3 && (
        <LegacyPaginationContainer
          onClick={() => onClick(currentPage - maxPageLinks - 1)}
        >
          {currentPage - maxPageLinks - 1}
        </LegacyPaginationContainer>
      )}
      {currentPage !== 1 &&
        Array(maxPageLinks)
          .fill(null)
          .map((x, i) => {
            if (currentPage - (maxPageLinks - i) <= 1) {
              return null;
            }
            return (
              <LegacyPaginationContainer
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                onClick={() => onClick(currentPage - (maxPageLinks - i))}
              >
                {currentPage - (maxPageLinks - i)}
              </LegacyPaginationContainer>
            );
          })}
      <LegacyPaginationContainer disabled>
        {currentPage}
      </LegacyPaginationContainer>
      {Array(maxPageLinks)
        .fill(null)
        .map((x, i) => {
          if (currentPage + (i + 1) >= totalPages) {
            return null;
          }

          return (
            <LegacyPaginationContainer
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              onClick={() => onClick(currentPage + (i + 1))}
            >
              {currentPage + (i + 1)}
            </LegacyPaginationContainer>
          );
        })}
      {currentPage === 1 && maxPageLinks === 1 && totalPages > 3 && (
        <LegacyPaginationContainer
          onClick={() => onClick(currentPage + maxPageLinks + 1)}
        >
          {currentPage + maxPageLinks + 1}
        </LegacyPaginationContainer>
      )}
      {currentPage + maxPageLinks + 1 < totalPages && (
        <LegacyPaginationElipses />
      )}
      {currentPage < totalPages && (
        <LegacyPaginationContainer onClick={() => onClick(totalPages)}>
          {totalPages}
        </LegacyPaginationContainer>
      )}
      {currentPage !== totalPages && (
        <LegacyPaginationContainer onClick={() => onClick(currentPage + 1)}>
          <Icon height="1rem" width="1rem" component={MaterialPlayArrow} />
        </LegacyPaginationContainer>
      )}
    </Box>
  );
};

export default LegacyPagination;
