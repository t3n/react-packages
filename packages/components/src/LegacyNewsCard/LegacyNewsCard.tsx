/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';
import { border, color, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Image from '../Image';
import Placeholder from '../Placeholder';
import Text from '../Text';
import LegacyNewsCardHeadline from './LegacyNewsCardHeadline';
import LegacyNewsCardMetaData from './LegacyNewsCardMetaData';

// TODO: Use fastly image

export interface LegacyNewsCardProps {
  loading: boolean;
  popular?: boolean;
  sponsored?: boolean;
  hero?: boolean;
  pro?: boolean;
  tr?: boolean;
  withImage?: boolean;
  withTeaser?: boolean;
  withAuthor?: boolean;
  isBookmarked?: boolean;
  onBookmarkClick: () => void;

  news?: {
    title: string;
    type: string;
    teaser: string;
    author: {
      name: string;
    };
    imageUrl: string;
    publishedAt: Date;
    url: string;
    readingTime?: number;
  };
}

const LegacyNewsCardWrapper = styled(Box)`
  @media screen and (min-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[1]}) {
    ${({ theme }) => space({ theme, p: 3 })};
    ${({ theme }) =>
      border({
        theme,
        border: '1px solid',
        borderColor: 'shades.grey232',
        borderRadius: '4px',
      })}
  }

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[1]}) {
    ${({ theme }) => space({ theme, p: 0, pb: 3 })};
    ${({ theme }) =>
      border({
        theme,
        borderBottom: '1px solid',
        borderColor: 'shades.grey232',
      })}
  }
`;

const NewsCardLink = styled.a<{ hero?: boolean }>`
  text-decoration: none;
  display: flex;
  flex-direction: ${({ hero }) =>
    hero ? 'column' : ['column', 'column', 'row']};
  ${({ theme }) => color({ theme, color: 'text.primary' })};
`;

const LegacyNewsCardImage = styled(Image)`
  ${({ theme }) => border({ theme, borderRadius: '4px' })}
`;

export const LegacyLoadingHeroCard = () => (
  <LegacyNewsCardWrapper>
    <Placeholder
      width="calc(100% + 2 * 16px)"
      height="calc(344px + 16px)"
      ml={-3}
      mr={-3}
      mt={-3}
      mb={3}
    />
    <Placeholder width="80%" height="0.9rem" mt={3} mb={2} />
    <Placeholder height="2rem" mt={1} mb={2} />
    <Placeholder height="2rem" mt={1} mb={2} width={3 / 4} />
    <Placeholder height="1.5rem" mt={1} mb={2} width={1 / 2} />
    <Placeholder height="0.9rem" mt={3} mb={0} width="100%" />
  </LegacyNewsCardWrapper>
);

export const LegacyLoadingFeedCard: React.FC<{ withImage?: boolean }> = ({
  withImage,
}) => (
  <LegacyNewsCardWrapper display="flex">
    {!withImage && (
      <Box mr={3}>
        <Placeholder height="120px" width="200px" />
      </Box>
    )}
    <Box width={1}>
      <Placeholder height="0.875rem" mt={0} mb={2} width="90%" />
      <Placeholder height="1.5rem" mt={1} mb={1} />
      <Placeholder height="1.5rem" mt={1} mb={1} width="75%" />
      <Placeholder height="0.875rem" mt={1} mb={1} />
      <Placeholder height="0.875rem" mt={1} width={3 / 4} />
      <Placeholder height="0.9rem" mt={2} mb={1} width="100%" />
    </Box>
  </LegacyNewsCardWrapper>
);

const LegacyNewsCard = ({
  news,
  loading,
  hero,
  sponsored,
  popular,
  pro,
  tr,
  withTeaser,
  withImage = true,
  withAuthor = false,
  isBookmarked = false,
  onBookmarkClick,
}: LegacyNewsCardProps) => {
  if (!loading && !news) {
    return <Text>Keine Daten vorhanden</Text>;
  }

  if (loading) {
    return hero ? (
      <LegacyLoadingHeroCard />
    ) : (
      <LegacyLoadingFeedCard withImage={withImage} />
    );
  }

  return news ? (
    <>
      <LegacyNewsCardWrapper display={['none', 'none', 'block']}>
        <NewsCardLink href={news.url} aria-label="News-URL" hero={hero}>
          {withImage && (
            <LegacyNewsCardImage
              imageWidth={hero ? 900 : 300}
              imageHeight={hero ? 506 : 169}
              width={hero ? '100%' : '200px'}
              height="auto"
              optimizationClass={`news-card-${hero ? 'large' : 'small'}`}
              src={news.imageUrl}
            />
          )}
          <Box mt={hero && withImage ? 3 : 0} ml={hero || !withImage ? '0' : 3}>
            <LegacyNewsCardHeadline
              title={news.title}
              type={news.type}
              pro={pro}
              tr={tr}
              sponsored={sponsored}
            />
            {withTeaser && (
              <Text mb={2} mt={3}>
                {news.teaser}
              </Text>
            )}
            {popular && (
              <Text italic small secondary mb={2} mt={0}>
                Dieser Artikel hat besonders viele Leser:innen interessiert
              </Text>
            )}
            <LegacyNewsCardMetaData
              withAuthor={withAuthor}
              author={news.author.name}
              readingTime={news.readingTime}
              isBookmarked={isBookmarked}
              onClick={onBookmarkClick}
            />
          </Box>
        </NewsCardLink>
      </LegacyNewsCardWrapper>
      <LegacyNewsCardWrapper display={['block', 'block', 'none']}>
        <NewsCardLink href={news.url} aria-label="News-URL" hero>
          <Image
            imageWidth={900}
            imageHeight={506}
            width={['100%']}
            height="auto"
            optimizationClass="news-card-large"
            src={news.imageUrl}
            mb={3}
          />
          <LegacyNewsCardHeadline
            title={news.title}
            type={news.type}
            pro={pro}
            tr={tr}
            sponsored={sponsored}
          />
          {withTeaser && (
            <Text mb={1} mt={3}>
              {news.teaser}
            </Text>
          )}
        </NewsCardLink>
        <LegacyNewsCardMetaData
          withAuthor={withAuthor}
          author={news.author.name}
          readingTime={news.readingTime}
          isBookmarked={isBookmarked}
          onClick={onBookmarkClick}
        />
      </LegacyNewsCardWrapper>
    </>
  ) : null;
};

export default LegacyNewsCard;
