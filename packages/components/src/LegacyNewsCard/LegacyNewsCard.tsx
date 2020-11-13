/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import styled from 'styled-components';
import { border, space, typography } from 'styled-system';
import { Text } from '../Text';
import { Placeholder } from '../Placeholder';
import { Box } from '../Box';
import { Heading } from '../Heading';
import { Image } from '../Image';
import { LegacyArticleSocialShare } from '../LegacyArticleSocialShare';
import { LegacyCard } from '../LegacyCard';
import { Ratio } from '../Ratio';

export interface LegacyNewsCardProps {
  loading: boolean;
  popular?: boolean;
  sponsored?: boolean;
  hero?: boolean;

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
  };
}

export interface LegacyHeroCardProps {
  type: string;
  sponsored?: boolean;
  hero?: boolean;
  title: string;
  teaser: string;
  url: string;
  imageUrl: string;
}

const LegacyNewsCardHeadline = styled(Heading)<{
  hero?: boolean;
}>`
  ${({ theme, hero }) => typography({ theme, fontSize: hero ? '2.65rem' : 3 })}
  ${({ theme, hero }) => space({ theme, ml: !hero ? '216px' : '' })}
`;

const LegacyNewsCardMobileHeadline = styled(Heading)`
  ${({ theme }) => typography({ theme, fontSize: 2 })}
`;

const SponsoredInfo = styled(Text)<{ hero?: boolean }>`
  font-size: 0.75rem;
  ${({ theme, hero }) => space({ theme, ml: !hero ? '216px' : '' })}
`;

const LegacyHeroTeaser = styled(Text)<{ hero?: boolean }>`
  ${({ theme, hero }) => typography({ theme, fontSize: hero ? 2 : 1 })}
`;

const LegacyMobileNewsCard = styled(Box)`
  ${({ theme }) =>
    border({
      theme,
      borderBottom: '2px solid',
      borderColor: 'shades.grey232',
    })}
`;

const LegacyNewsCardMeta = styled(Box)`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
  }
`;

export const LegacyLoadingHeroCard = () => (
  <LegacyCard display={['none', 'none', 'block']}>
    <Placeholder width="90%" height="3rem" mt={1} mb={2} />
    <Placeholder width={1 / 2} height="3rem" mt={1} mb={5} />
    <Box display="flex">
      <Box mr={3}>
        <Placeholder width="380px" height="215px" />
      </Box>
      <Box width={1}>
        <Placeholder height="1.5rem" mt={1} mb={2} />
        <Placeholder height="1.5rem" mt={1} mb={2} />
        <Placeholder height="1.5rem" mt={1} mb={2} />
        <Placeholder height="1.5rem" mt={1} mb={2} width={3 / 4} />
      </Box>
    </Box>
  </LegacyCard>
);

export const LegacyLoadingFeedCard = () => (
  <LegacyCard display={['none', 'none', 'block']}>
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
      </Box>
    </Box>
  </LegacyCard>
);

export const LegacyLoadingMobileCard = () => (
  <LegacyMobileNewsCard display={['block', 'block', 'none']} px={3}>
    <Placeholder height="1.5rem" mt={1} mb={4} width="90%" />
    <Placeholder height="190px" width="320px" />
    <LegacyNewsCardMeta mt={2}>
      <Placeholder height="0.875rem" mt={1} mb={1} width="10%" />
      <Placeholder height="0.875rem" mt={1} mb={1} width="10%" />
    </LegacyNewsCardMeta>
  </LegacyMobileNewsCard>
);

export const LegacyNewsCard = ({
  news,
  loading,
  hero,
  sponsored,
  popular,
}: LegacyNewsCardProps) => {
  if (!loading && !news) {
    return <Text>Keine Daten vorhanden</Text>;
  }

  if (loading && hero) {
    return (
      <>
        <LegacyLoadingHeroCard />
        <LegacyLoadingMobileCard />
      </>
    );
  }
  if (loading) {
    return (
      <>
        <LegacyLoadingFeedCard />
        <LegacyLoadingMobileCard />
      </>
    );
  }

  return news ? (
    <>
      <LegacyCard display={['none', 'none', 'block']}>
        <a href={news.url}>
          {sponsored && (
            <SponsoredInfo as="span" secondary small hero={hero}>
              Anzeige
            </SponsoredInfo>
          )}
          <LegacyNewsCardHeadline hero={hero} as={hero ? 'h2' : 'h3'} mt={0}>
            {news.title}
          </LegacyNewsCardHeadline>
        </a>
        <Box display="flex">
          <Box
            mr={3}
            position={hero ? 'static' : 'absolute'}
            top={hero ? '' : '16px'}
          >
            <a href={news.url}>
              <Image
                width={hero ? '380px' : '200px'}
                height={hero ? '215px' : '120px'}
                fit="crop"
                src={news.imageUrl}
              />
            </a>
          </Box>
          <Box ml={hero ? '0' : '216px'}>
            <a href={news.url}>
              <LegacyHeroTeaser mt={0} mb={0}>
                <strong>{news.type} </strong>
                {news.teaser}
              </LegacyHeroTeaser>
            </a>
            {popular && (
              <Text italic small secondary mb={0} mt={2}>
                Dieser Artikel hat besonders viele Leser interessiert
              </Text>
            )}
            <LegacyArticleSocialShare url={news.url} title={news.title} />
          </Box>
        </Box>
      </LegacyCard>
      <LegacyMobileNewsCard display={['block', 'block', 'none']} px={3}>
        <LegacyNewsCardMobileHeadline as="h3" mt={0}>
          {news.title}
        </LegacyNewsCardMobileHeadline>
        <a href={news.url}>
          <Image
            width={1}
            height="auto"
            maxWidth="500px"
            fit="crop"
            src={news.imageUrl}
          />
        </a>
        <LegacyNewsCardMeta mt={2}>
          <Text bold mt={0}>
            {news.type}
          </Text>
          <Text mt={0}>
            {news.publishedAt.toLocaleDateString('de-DE', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </Text>
        </LegacyNewsCardMeta>
      </LegacyMobileNewsCard>
    </>
  ) : null;
};
