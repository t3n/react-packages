import React from 'react';
import { Card } from '../Card';
import { LoadingIndicator } from '../LoadingIndicator';
import { CardHeader } from '../CardHeader';
import { HeroCard } from '../HeroCard';
import { AuthorCard } from '../AuthorCard';

export type NewsCardType = 'HERO' | 'AUTHOR';

interface NewsCardProps {
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
      <LoadingIndicator />
    </CardHeader>
    <LoadingIndicator height="1.5rem" mb={3} />
    <LoadingIndicator height="1.5rem" width="75%" />
  </Card>
);

const LoadingAuthorCard = () => (
  <Card>
    <div>
      <LoadingIndicator height="1rem" width="30%" />
    </div>
    <LoadingIndicator height="1.5rem" mt={1} mb={1} />
    <LoadingIndicator height="1.5rem" mt={1} mb={7} width="75%" />
    <LoadingIndicator height="1.5rem" width="30%" />
  </Card>
);

const NewsCard = ({ loading, type, news }: NewsCardProps) => {
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

export default NewsCard;
