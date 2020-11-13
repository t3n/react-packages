import React from 'react';

import { Text } from '../Text';
import { LegacyFeedCard, LegacyLoadingFeedCard } from '../LegacyFeedCard';
import { LegacyHeroCard, LegacyLoadingHeroCard } from '../LegacyHeroCard';

export type LegacyNewsCardType = 'HERO' | 'FEED';

export interface LegacyNewsCardProps {
  loading: boolean;
  type: LegacyNewsCardType;
  mostRead?: boolean;
  sponsored?: boolean;

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

export const LegacyNewsCard = ({
  loading,
  type,
  mostRead = false,
  sponsored = false,
  news,
}: LegacyNewsCardProps) => {
  if (!loading && !news) {
    return <Text>Keine Daten vorhanden</Text>;
  }

  if (type === 'FEED') {
    return loading ? (
      <LegacyLoadingFeedCard />
    ) : news ? (
      <LegacyFeedCard
        mostRead={mostRead}
        sponsored={sponsored}
        type={news.type}
        title={news.title}
        teaser={news.teaser}
        url={news.url}
        imageUrl={news.imageUrl}
      />
    ) : null;
  }
  return loading ? (
    <LegacyLoadingHeroCard />
  ) : news ? (
    <LegacyHeroCard
      sponsored={sponsored}
      type={news.type}
      title={news.title}
      teaser={news.teaser}
      url={news.url}
      imageUrl={news.imageUrl}
    />
  ) : null;
};
