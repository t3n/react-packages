import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

import { MaterialSchedule } from '@t3n/icons';

import Box from '../Box';
import Text from '../Text';
import LegacyBookmark from './LegacyBookmark';

export interface LegacyNewsCardMetaDataProps {
  withAuthor?: boolean;
  author?: string;
  readingTime?: number;
  isBookmarked: boolean;
  onClick: () => void;
}

const LegacyNewsCardMeta = styled(Box)`
  div {
    ${({ theme }) => color({ theme, color: 'text.secondary' })};
    ${({ theme }) => typography({ theme, fontSize: 0 })};

    svg {
      ${({ theme }) => space({ theme, mr: 1 })};
    }
  }
`;

const LegacyNewsCardMetaData: React.FC<LegacyNewsCardMetaDataProps> = ({
  withAuthor,
  author,
  readingTime,
  isBookmarked,
  onClick,
}) => {
  return (
    <LegacyNewsCardMeta
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <Box display="flex" alignItems="center">
        {withAuthor && (
          <Box display="flex" alignItems="center">
            <Text small secondary my={0}>
              {author}
            </Text>
            <Text small secondary my={0} px={2}>
              •
            </Text>
          </Box>
        )}
        {readingTime && (
          <Box display="flex" alignItems="center" my={0}>
            <MaterialSchedule fill="#5f5f5f" width="16" height="16" />
            {readingTime} Min.
          </Box>
        )}
      </Box>
      <LegacyBookmark onClick={onClick} isBookmarked={isBookmarked} />
    </LegacyNewsCardMeta>
  );
};

export default LegacyNewsCardMetaData;
