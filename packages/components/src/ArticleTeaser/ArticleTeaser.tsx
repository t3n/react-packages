import React from 'react';
import { css, styled } from 'styled-components';
import { space } from 'styled-system';

import { T3nPlus } from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Grid from '../Grid';
import GridItem from '../GridItem';
import Heading from '../Heading';
import Image from '../Image';
import HoverLink from '../Link/HoverLink';
import Text from '../Text';
import TRBadge from '../TRBadge';
import Metabar from './Metabar';

export interface ArticleProps {
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
}

const UppercaseText = styled(Text)`
  text-transform: uppercase;
  font-size: 12px;
`;

const LargeTeaserImage = styled(Image)<ThemeProps>`
  border-radius: 4px;
  ${({ theme }) => space({ theme, mr: [0, 0, 0, 1] })};
`;

const SmallTeaserImage = styled(Image)<ThemeProps>`
  border-radius: 4px;
  ${({ theme }) => space({ theme, mr: [0, 0, 0, 1] })};

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      aspect-ratio: 1 / 1;
    }
  `}
`;

const ArticleTeaser = ({
  article,
  teaserText,
  largeTeaserImage,
  smallTeaserImage,
  isBookmarked,
  handleBookmarkClick,
}: {
  article: ArticleProps;
  teaserText?: boolean;
  largeTeaserImage?: boolean;
  smallTeaserImage?: boolean;
  isBookmarked: boolean;
  handleBookmarkClick: () => void;
}) => {
  return (
    <>
      <HoverLink href={article.url}>
        <Grid>
          <GridItem width={smallTeaserImage ? [3 / 4, 3 / 4, 3 / 4, 5 / 6] : 1}>
            {largeTeaserImage && article.imageUrl && (
              <LargeTeaserImage
                src={article.imageUrl}
                alt={article.title}
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
            <GridItem width={[1 / 4, 1 / 4, 1 / 4, 1 / 6]}>
              <SmallTeaserImage
                src={article.imageUrl}
                alt={article.title}
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
