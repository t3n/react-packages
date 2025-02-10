import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';

import { T3nPlus } from '@t3n/icons';

import Box from '../Box';
import Grid from '../Grid';
import GridItem from '../GridItem';
import Heading from '../Heading';
import Image from '../Image';
import HoverLink from '../Link/HoverLink';
import Text from '../Text';
import TRBadge from '../TRBadge';
import Metabar from './Metabar';

export type ArticleProps = {
  identifier: string;
  type: string;
  date: string;
  title: string;
  teaser?: string;
  url: string;
  imageUrl?: string;
  readingTime: number;
  isPaywallArticle?: boolean;
  isTRArticle?: boolean;
};

const UppercaseText = styled(Text)`
  text-transform: uppercase;
  font-size: 12px;
`;

const LargeTeaserImage = styled(Image)`
  border-radius: 4px;
  ${({ theme }) => space({ theme, mr: [0, 0, 0, 1] })};
`;

const SmallTeaserImage = styled(Image)`
  border-radius: 4px;
  ${({ theme }) => space({ theme, mr: [0, 0, 0, 1] })};

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      aspect-ratio: 1 / 1;
    }
  `}
`;

const ArticleTeaser: React.FC<{
  article: ArticleProps;
  teaserText?: boolean;
  largeTeaserImage?: boolean;
  smallTeaserImage?: boolean;
  isBookmarked: boolean;
  handleBookmarkClick: () => void;
}> = ({
  article,
  teaserText,
  largeTeaserImage,
  smallTeaserImage,
  isBookmarked,
  handleBookmarkClick,
}) => {
  return (
    <>
      <HoverLink href={article.url}>
        <Grid>
          <GridItem
            width={smallTeaserImage ? [3 / 4, 3 / 4, 3 / 4, 5 / 6, 7 / 8] : 1}
          >
            {largeTeaserImage && article.imageUrl && (
              <LargeTeaserImage
                src={article.imageUrl}
                width={1}
                height="auto"
                optimizationClass="teaser-full"
                mb={2}
              />
            )}
            <Box display="flex" alignItems="center" flexWrap="wrap" mb={1}>
              {article.isPaywallArticle && (
                <T3nPlus
                  width="22px"
                  height="18px"
                  style={{ marginRight: 8 }}
                />
              )}
              {article.isTRArticle && <TRBadge />}
              <UppercaseText small bold mt={0} mb={0}>
                {article.type}
              </UppercaseText>
            </Box>
            <Heading as="h2" styleAs="h5" mt={0} mb={0}>
              {article.title}
            </Heading>
            {teaserText && <Text>{article.teaser}</Text>}
          </GridItem>
          {smallTeaserImage && article.imageUrl && (
            <GridItem width={[1 / 4, 1 / 4, 1 / 4, 1 / 6, 1 / 8]}>
              <SmallTeaserImage
                src={article.imageUrl}
                width={1}
                height="auto"
                optimizationClass="avatar-large"
                ml={2}
              />
            </GridItem>
          )}
        </Grid>
      </HoverLink>
      <Metabar
        article={article}
        isBookmarked={isBookmarked}
        handleBookmarkClick={handleBookmarkClick}
      />
    </>
  );
};

export default ArticleTeaser;
