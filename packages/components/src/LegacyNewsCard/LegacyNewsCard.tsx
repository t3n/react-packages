/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';
import { border, lineHeight, space, typography } from 'styled-system';

import { T3nPro } from '@t3n/icons';

import Box from '../Box';
import Heading from '../Heading';
import Image from '../Image';
import LegacyCard from '../LegacyCard';
import Placeholder from '../Placeholder';
import Text from '../Text';
import LegacyNewsCardMetaData from './LegacyNewsCardMetaData';

// TODO: Use fastly image

export interface LegacyNewsCardProps {
  loading: boolean;
  popular?: boolean;
  sponsored?: boolean;
  hero?: boolean;
  pro?: boolean;
  isBookmarked?: boolean;
  onBookmarkClick: () => void;

  news?: {
    title: string;
    type: string;
    teaser: string;
    author: {
      name: string;
      avatar: string;
    };
    imageUrl: string;
    publishedAt: Date;
    url: string;
    readingTime?: number;
  };
}

const LineHeightHeading = styled(Heading)`
  ${({ theme }) => lineHeight({ theme, lineHeight: 1 })}
`;

const LegacyNewsCardMobileHeadline = styled(Heading)`
  ${({ theme }) => typography({ theme, fontSize: 2 })}
  ${({ theme }) => lineHeight({ theme, lineHeight: 1 })}
`;

const SponsoredInfo = styled(Text)<Pick<LegacyNewsCardProps, 'hero'>>`
  font-size: 0.75rem;
  ${({ theme, hero }) => space({ theme, ml: !hero ? '216px' : '' })}
`;

const LegacyHeroTeaser = styled(Text)<Pick<LegacyNewsCardProps, 'hero'>>`
  ${({ theme, hero }) => typography({ theme, fontSize: hero ? 2 : '14px' })}
`;

const LegacyMobileNewsCard = styled(Box)`
  ${({ theme }) =>
    border({
      theme,
      borderBottom: '2px solid',
      borderColor: 'shades.grey232',
    })}
  ${({ theme }) => space({ theme, px: 3 })}
`;

export const LegacyLoadingHeroCard = () => (
  <LegacyCard display={['none', 'none', 'block']}>
    <Placeholder
      width="calc(100% + 2 * 16px)"
      height="calc(344px + 16px)"
      ml={-3}
      mr={-3}
      mt={-3}
      mb={3}
    />
    <Placeholder width="90%" height="2rem" mt={3} mb={2} />
    <Placeholder height="1.5rem" mt={1} mb={2} />
    <Placeholder height="1.5rem" mt={1} mb={2} width={3 / 4} />
    <Placeholder height="0.9rem" mt={3} mb={2} width="100%" />
  </LegacyCard>
);

export const LegacyLoadingFeedCard = () => (
  <LegacyCard>
    <Box display="flex">
      <Box mr={3}>
        <Placeholder height="120px" width="200px" />
      </Box>
      <Box width={1}>
        <Placeholder height="1.5rem" mt={1} mb={4} width="90%" />
        <Placeholder height="0.875rem" mt={1} mb={1} />
        <Placeholder height="0.875rem" mt={1} mb={1} width="95%" />
        <Placeholder height="0.875rem" mt={1} mb={1} />
        <Placeholder height="0.875rem" mt={1} width={3 / 4} />
        <Placeholder height="0.9rem" mt={4} mb={2} width="100%" />
      </Box>
    </Box>
  </LegacyCard>
);

export const LegacyLoadingMobileCard = () => (
  <LegacyMobileNewsCard>
    <Placeholder height="1.25rem" mt={1} mb={2} width="100%" />
    <Placeholder height="1.25rem" mt={1} mb={4} width="100%" />
    <Placeholder height="230px" width="350px" maxWidth="100%" />
    <Placeholder height="0.9rem" mt={3} mb={3} width="100%" />
  </LegacyMobileNewsCard>
);

const LegacyNewsCard = ({
  news,
  loading,
  hero,
  sponsored,
  popular,
  pro,
  isBookmarked = false,
  onBookmarkClick,
}: LegacyNewsCardProps) => {
  if (!loading && !news) {
    return <Text>Keine Daten vorhanden</Text>;
  }

  if (loading) {
    return (
      <>
        <Box display={['none', 'none', 'block']}>
          {hero ? <LegacyLoadingHeroCard /> : <LegacyLoadingFeedCard />}
        </Box>
        <Box display={['block', 'block', 'none']}>
          <LegacyLoadingMobileCard />
        </Box>
      </>
    );
  }

  return news ? (
    <>
      <LegacyCard display={['none', 'none', 'block']}>
        {!hero && (
          <a href={news.url}>
            {sponsored && (
              <SponsoredInfo as="span" secondary small hero={hero}>
                Anzeige
              </SponsoredInfo>
            )}
            <LineHeightHeading as="h4" mt={0} mb={2} ml="216px">
              {pro && (
                <>
                  <T3nPro height="12" width="25" />{' '}
                </>
              )}
              {news.title}
            </LineHeightHeading>
          </a>
        )}
        <Box display="flex" flexDirection={hero ? 'column' : 'row'}>
          <Box
            ml={hero ? -3 : 0}
            mr={hero ? -3 : 0}
            mt={hero ? -3 : 0}
            position={hero ? 'initial' : 'absolute'}
            top={hero ? '' : '16px'}
            mb={hero ? 3 : 0}
          >
            <a href={news.url}>
              <Image
                imageWidth={hero ? 900 : 300}
                imageHeight={hero ? 506 : 169}
                width={hero ? '100%' : '200px'}
                height="auto"
                optimizationClass={`news-card-${hero ? 'large' : 'small'}`}
                src={news.imageUrl}
              />
            </a>
          </Box>
          <Box ml={hero ? '0' : '216px'}>
            <a href={news.url}>
              {hero && (
                <>
                  {sponsored && (
                    <SponsoredInfo as="span" secondary small hero={hero}>
                      Anzeige
                    </SponsoredInfo>
                  )}
                  <LineHeightHeading as="h4" mt={0} mb={3}>
                    {pro && (
                      <>
                        <T3nPro height="12" width="25" />{' '}
                      </>
                    )}
                    {news.title}
                  </LineHeightHeading>
                </>
              )}
              <LegacyHeroTeaser mt={0} mb={0}>
                {news.teaser}
              </LegacyHeroTeaser>
            </a>
            {popular && (
              <Text italic small secondary mb={0} mt={2}>
                Dieser Artikel hat besonders viele Leser interessiert
              </Text>
            )}
            <LegacyNewsCardMetaData
              type={news.type}
              publishedAt={news.publishedAt}
              readingTime={news.readingTime}
              isBookmarked={isBookmarked}
              onClick={onBookmarkClick}
            />
          </Box>
        </Box>
      </LegacyCard>
      <LegacyMobileNewsCard display={['block', 'block', 'none']}>
        <LegacyNewsCardMobileHeadline as="h3" mt={0} mb="15px">
          {pro && (
            <>
              <T3nPro height="12" width="25" />{' '}
            </>
          )}
          {news.title}
        </LegacyNewsCardMobileHeadline>
        <a href={news.url}>
          <Image
            imageWidth={900}
            imageHeight={506}
            width={['100%']}
            height="auto"
            optimizationClass="news-card-large"
            src={news.imageUrl}
          />
        </a>
        <LegacyNewsCardMetaData
          type={news.type}
          publishedAt={news.publishedAt}
          readingTime={news.readingTime}
          isBookmarked={isBookmarked}
          onClick={onBookmarkClick}
        />
      </LegacyMobileNewsCard>
    </>
  ) : null;
};

export default LegacyNewsCard;
