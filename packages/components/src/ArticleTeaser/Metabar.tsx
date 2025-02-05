import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { MaterialAccessTime } from '@t3n/icons';

import Box from '../Box';
import Icon from '../Icon';
import LegacyBookmark from '../LegacyBookmark';
import Text from '../Text';
import { ArticleProps } from './ArticleTeaser';

const PaddingSpan = styled.span`
  ${({ theme }) => space({ theme, px: 2 })}
`;

const FlexText = styled(Text)`
  display: flex;
  align-items: center;
`;

const Metabar: React.FC<{
  article: ArticleProps;
  isBookmarked: boolean;
  handleBookmarkClick: () => void;
}> = ({ article, isBookmarked, handleBookmarkClick }) => {
  return (
    <Box
      pt={2}
      mt="auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      overflow={['hidden', 'visible']}
    >
      <FlexText small secondary mt={0} mb={0}>
        {article.date} Uhr
        <PaddingSpan>•</PaddingSpan>
        <Icon
          component={MaterialAccessTime}
          mr={1}
          fill="text.secondary"
          width="1rem"
          height="1rem"
        />
        {article.readingTime} Min.
      </FlexText>
      <LegacyBookmark
        onClick={handleBookmarkClick}
        isBookmarked={isBookmarked}
      />
    </Box>
  );
};

export default Metabar;
