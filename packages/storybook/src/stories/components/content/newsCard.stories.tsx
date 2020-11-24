import React from 'react';
import { number, select, boolean, text } from '@storybook/addon-knobs';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Grid, GridItem, NewsCard } from '@t3n/components';
import { NewsCardType } from '@t3n/components/src/NewsCard/NewsCard';

import { storyContainerContentDecorator } from '../../../utils/decorators';
import { recentNews, recentNewsVariables } from './__generated__/recentNews';

export default {
  title: 'Components/Content/NewsCard',
  component: NewsCard,
  decorators: [storyContainerContentDecorator],
};

const RECENT_NEWS = gql`
  query recentNews($limit: Int!) {
    article {
      recentNews(limit: $limit) {
        identifier
        title
        teaser
        type
        date
        url
        date
        imageUrl
        author {
          identifier
          firstName
          lastName
          avatarUrl
        }
      }
    }
  }
`;

const ArticleCardWithData = ({
  limit,
  fakeLoading,
}: {
  limit: number;
  fakeLoading: boolean;
}) => {
  const type: NewsCardType = select(
    'Darstellung als',
    { 'Hero-Card': 'HERO', 'Author-Card': 'AUTHOR' },
    'HERO'
  );

  const { data, loading } = useQuery<recentNews, recentNewsVariables>(
    RECENT_NEWS,
    {
      variables: {
        limit,
      },
    }
  );

  return (
    <Grid wide justifyContent="center">
      {loading || fakeLoading
        ? new Array(limit).fill(null).map((el, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <GridItem key={idx} width={[1, 1, 1 / 3]} mb={4}>
              <NewsCard loading type={type} />
            </GridItem>
          ))
        : data &&
          data.article &&
          data.article.recentNews &&
          data.article.recentNews.map((news) => (
            <GridItem key={news.identifier} width={[1, 1, 1 / 3]} mb={4}>
              <NewsCard
                news={{
                  ...news,
                  author: {
                    name: `${news.author.firstName || ''} ${
                      news.author.lastName || ''
                    }`,
                    avatar: news.author.avatarUrl || '',
                  },
                  publishedAt: new Date(news.date),
                }}
                loading={false}
                type={type}
              />
            </GridItem>
          ))}
    </Grid>
  );
};

export const defaultStory = () => {
  const news = {
    title: text(
      'Titel',
      'Mediamarkt und Saturn: US-Managerin DiMotta soll Wachstum bringen',
      'news'
    ),
    author: {
      name: text('Author-Name', 'Tobias Weidemann', 'news'),
      avatar: text(
        'Author Avatar-URL',
        'https://storage.googleapis.com/t3n-de/neos/a0bb50df94a67b9f79a0cd4d95ee9fab293105f9/tw_pic.jpg',
        'news'
      ),
    },
    publishedAt: new Date(
      text('Datum', 'Wed, 14 Aug 2019 10:30:30 GMT', 'news')
    ),
    imageUrl: text(
      'Bild-URL',
      'https://t3n.de/news/wp-content/uploads/2017/06/Media-saturn-ingolstadt-redcoon.jpg',
      'news'
    ),
    url: text(
      'Url',
      'https://t3n.de/news/mediamarkt-saturn-kaum-wachstum-1187784/',
      'news'
    ),
    type: text('Artikel-Typ', 'Ratgeber', 'news'),
  };

  return (
    <NewsCard
      loading={boolean('Fake Lade-Status', false, 'card')}
      type={select('Darstellung', ['AUTHOR', 'HERO'], 'HERO', 'card')}
      news={news}
    />
  );
};

defaultStory.story = {
  name: 'Default',
};

export const heroLayout = () => {
  const news = {
    title: text(
      'Titel',
      'Mediamarkt und Saturn: US-Managerin DiMotta soll Wachstum bringen',
      'news'
    ),
    author: {
      name: text('Author-Name', 'Tobias Weidemann', 'news'),
      avatar: text(
        'Author Avatar-URL',
        'https://storage.googleapis.com/t3n-de/neos/a0bb50df94a67b9f79a0cd4d95ee9fab293105f9/tw_pic.jpg',
        'news'
      ),
    },
    publishedAt: new Date(
      text('Datum', 'Wed, 14 Aug 2019 10:30:30 GMT', 'news')
    ),
    imageUrl: text(
      'Bild-URL',
      'https://t3n.de/news/wp-content/uploads/2017/06/Media-saturn-ingolstadt-redcoon.jpg',
      'news'
    ),
    url: text(
      'Url',
      'https://t3n.de/news/mediamarkt-saturn-kaum-wachstum-1187784/',
      'news'
    ),
    type: text('Artikel-Typ', 'Ratgeber', 'news'),
  };

  return (
    <Grid justifyContent="center">
      <GridItem width={1 / 3}>
        <NewsCard type="HERO" news={news} />
      </GridItem>
      <GridItem width={1 / 3}>
        <NewsCard loading={false} type="HERO" news={news} />
      </GridItem>
    </Grid>
  );
};

export const authorLayout = () => {
  const news = {
    title: text(
      'Titel',
      'Mediamarkt und Saturn: US-Managerin DiMotta soll Wachstum bringen',
      'news'
    ),
    author: {
      name: text('Author-Name', 'Tobias Weidemann', 'news'),
      avatar: text(
        'Author Avatar-URL',
        'https://storage.googleapis.com/t3n-de/neos/a0bb50df94a67b9f79a0cd4d95ee9fab293105f9/tw_pic.jpg',
        'news'
      ),
    },
    publishedAt: new Date(
      text('Datum', 'Wed, 14 Aug 2019 10:30:30 GMT', 'news')
    ),
    imageUrl: text(
      'Bild-URL',
      'https://t3n.de/news/wp-content/uploads/2017/06/Media-saturn-ingolstadt-redcoon.jpg',
      'news'
    ),
    url: text(
      'Url',
      'https://t3n.de/news/mediamarkt-saturn-kaum-wachstum-1187784/',
      'news'
    ),
    type: text('Artikel-Typ', 'Ratgeber', 'news'),
  };

  return (
    <Grid justifyContent="center">
      <GridItem width={1 / 3}>
        <NewsCard type="AUTHOR" news={news} />
      </GridItem>
      <GridItem width={1 / 3}>
        <NewsCard loading={false} type="AUTHOR" news={news} />
      </GridItem>
    </Grid>
  );
};

export const liveData = () => {
  const limit = number('Anzahl der Kacheln', 6, {
    min: 1,
    max: 10,
    range: false,
    step: 1,
  });
  const fakeLoading = boolean('Fake ladestatus', false);

  return <ArticleCardWithData limit={limit} fakeLoading={fakeLoading} />;
};

liveData.story = {
  name: 'Live-Daten',
};
