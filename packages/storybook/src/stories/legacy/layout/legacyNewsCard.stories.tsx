import React from 'react';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

import { Box, Grid, GridItem, LegacyNewsCard } from '@t3n/components';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { storyContainerContentDecorator } from '../../../utils/decorators';
import {
  recentNews,
  recentNewsVariables,
} from '../../components/content/__generated__/recentNews';

export default {
  title: 'Legacy|Layout/News-Card',
  component: LegacyNewsCard,
  decorators: [withKnobs, storyContainerContentDecorator],
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

const LegacyArticleCardWithData = ({
  limit,
  fakeLoading,
}: {
  limit: number;
  fakeLoading: boolean;
}) => {
  const hero = boolean('Hero-Card', false);

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
            <GridItem key={idx} width={1} mb={4}>
              <LegacyNewsCard loading hero={hero} />
            </GridItem>
          ))
        : data &&
          data.article &&
          data.article.recentNews &&
          data.article.recentNews.map((news) => (
            <GridItem key={news.identifier} width={1} mb={4}>
              <LegacyNewsCard
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
                hero={hero}
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
    teaser: text(
      'Teaser',
      'Papier- und Formularberge in deutschen Unternehmen könnten schon bald der Vergangenheit angehören. Der Trend geht auch hier zur Digitalisierung. Das hat jetzt eine Studie des Bitkom ergeben.',
      'news'
    ),
  };

  return (
    <LegacyNewsCard
      loading={boolean('Loading', false, 'card')}
      hero={boolean('Hero', false, 'card')}
      news={news}
      popular={boolean('Popular', false, 'card')}
      sponsored={boolean('Sponsored', false, 'card')}
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
    teaser: text(
      'Teaser',
      'Papier- und Formularberge in deutschen Unternehmen könnten schon bald der Vergangenheit angehören. Der Trend geht auch hier zur Digitalisierung. Das hat jetzt eine Studie des Bitkom ergeben.',
      'news'
    ),
  };

  return (
    <>
      <Box mb={3}>
        <LegacyNewsCard
          loading
          hero
          news={news}
          sponsored={boolean('Sponsored', false, 'card')}
        />
      </Box>
      <Box>
        <LegacyNewsCard
          loading={false}
          hero
          news={news}
          sponsored={boolean('Sponsored', false, 'card')}
        />
      </Box>
    </>
  );
};

heroLayout.story = {
  name: 'Hero Layout',
};

export const feedLayout = () => {
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
    teaser: text(
      'Teaser',
      'Papier- und Formularberge in deutschen Unternehmen könnten schon bald der Vergangenheit angehören. Der Trend geht auch hier zur Digitalisierung. Das hat jetzt eine Studie des Bitkom ergeben.',
      'news'
    ),
  };

  return (
    <>
      <Box mb={3}>
        <LegacyNewsCard
          loading
          news={news}
          sponsored={boolean('Sponsored', false, 'card')}
          popular={boolean('Popular', false, 'card')}
        />
      </Box>
      <Box>
        <LegacyNewsCard
          loading={false}
          news={news}
          sponsored={boolean('Sponsored', false, 'card')}
          popular={boolean('Popular', false, 'card')}
        />
      </Box>
    </>
  );
};

feedLayout.story = {
  name: 'Feed Layout',
};

export const liveData = () => {
  const limit = number('Anzahl der Kacheln', 6, {
    min: 1,
    max: 10,
    range: false,
    step: 1,
  });
  const fakeLoading = boolean('Loading', false);

  return <LegacyArticleCardWithData limit={limit} fakeLoading={fakeLoading} />;
};

liveData.story = {
  name: 'Live-Daten',
};
