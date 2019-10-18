import React from 'react';
import { Card } from '../Card';
import { Placeholder } from '../Placeholder';
import { CardHeader } from '../CardHeader';
import { HeroCard } from '../HeroCard';
import { AuthorCard } from '../AuthorCard';

export type NewsCardType = 'HERO' | 'AUTHOR';

export interface NewsCardProps {
  loading: boolean;
  type: NewsCardType;

  news?: {
    title: string;
    type: string;
    author: {
      name: string;
      avatar: string;
    };
    imageUrl: string;
    publishedAt: Date;
    url: string;
  };
}

const LoadingHeroCard = () => (
  <Card>
    <CardHeader>
      <Placeholder />
    </CardHeader>
    <Placeholder height="1.5rem" mb={4} />
    <Placeholder height="1.5rem" width={3 / 4} />
  </Card>
);

const LoadingAuthorCard = () => (
  <Card>
    <div>
      <Placeholder height="1rem" width="30%" />
    </div>
    <Placeholder height="1.5rem" mt={1} mb={2} />
    <Placeholder height="1.5rem" mt={1} mb={8} width={3 / 4} />
    <Placeholder height="1.5rem" width="30%" />
  </Card>
);

export const NewsCard = ({ loading, type, news }: NewsCardProps) => {
  if (!loading && !news) {
    return <p>Keine Daten</p>;
  }

  if (type === 'HERO') {
    return loading ? (
      <LoadingHeroCard />
    ) : news ? (
      <HeroCard
        author={news.author.name}
        imageUrl={news.imageUrl}
        publishedAt={news.publishedAt}
        title={news.title}
        url={news.url}
      />
    ) : null;
  }

  // Author-Card
  return loading ? (
    <LoadingAuthorCard />
  ) : news ? (
    <AuthorCard
      articleType={news.type}
      author={news.author}
      title={news.title}
      url={news.url}
    />
  ) : null;
};

NewsCard.defaultProps = {
  loading: true
};
