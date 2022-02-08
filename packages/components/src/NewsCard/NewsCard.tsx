import React from 'react';

import AuthorCard from '../AuthorCard';
import Card from '../Card';
import CardHeader from '../CardHeader';
import HeroCard from '../HeroCard';
import Placeholder from '../Placeholder';

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

const NewsCard = ({ loading, type, news }: NewsCardProps) => {
  if (!loading && !news) {
    return <p>Keine Daten</p>;
  }

  if (type === 'HERO') {
    if (loading) return <LoadingHeroCard />;

    if (!news) return null;

    return (
      <HeroCard
        author={news.author.name}
        imageUrl={news.imageUrl}
        publishedAt={news.publishedAt}
        title={news.title}
        url={news.url}
      />
    );
  }

  if (loading) return <LoadingAuthorCard />;

  if (!news) return null;

  return (
    <AuthorCard
      articleType={news.type}
      author={news.author}
      title={news.title}
      url={news.url}
    />
  );
};

NewsCard.defaultProps = {
  loading: true,
};

export default NewsCard;
