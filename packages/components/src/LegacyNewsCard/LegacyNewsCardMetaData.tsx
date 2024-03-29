import React from 'react';
import styled from 'styled-components';
import { typography } from 'styled-system';

import Box from '../Box';
import Text from '../Text';
import LegacyBookmark from './LegacyBookmark';

export interface LegacyNewsCardMetaDataProps {
  type: string;
  publishedAt: Date;
  readingTime?: number;
  isBookmarked: boolean;
  onClick: () => void;
}

const LegacyNewsCardMeta = styled(Box)`
  p {
    ${({ theme }) => typography({ theme, fontSize: 0 })}
  }
`;

const LegacyNewsCardMetaData: React.FC<LegacyNewsCardMetaDataProps> = ({
  type,
  publishedAt,
  readingTime,
  isBookmarked,
  onClick,
}) => {
  return (
    <LegacyNewsCardMeta
      display="flex"
      justifyContent="space-between"
      mt={3}
      mb={[2, 2, 2, 0]}
    >
      <Box display="flex">
        <Text bold secondary my={0}>
          {type}
        </Text>
        <Text secondary my={0} px={2}>
          •
        </Text>
        <Text secondary my={0}>
          {readingTime
            ? `${readingTime} Min.`
            : publishedAt.toLocaleDateString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
        </Text>
      </Box>
      <LegacyBookmark onClick={onClick} isBookmarked={isBookmarked} />
    </LegacyNewsCardMeta>
  );
};

export default LegacyNewsCardMetaData;
