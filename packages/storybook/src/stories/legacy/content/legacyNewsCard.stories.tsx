/* eslint-disable no-alert */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { boolean, number, text } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';
import gql from 'graphql-tag';

import { Box, Grid, GridItem, LegacyNewsCard } from '@t3n/components';

import {
  recentNews,
  recentNewsVariables,
} from '../../components/content/__generated__/recentNews';

export default {
  title: 'Legacy/Content/News-Card',
  component: LegacyNewsCard,
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
        imageUrl(class: "default")
        author {
          identifier
          firstName
          lastName
          avatarUrl
        }
        readingTime
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
    <Grid wide justifyContent="center" p={0}>
      {loading || fakeLoading
        ? new Array(limit).fill(null).map((el, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <GridItem key={idx} width={1} mb={4}>
              <LegacyNewsCard
                loading
                hero={hero}
                onBookmarkClick={() =>
                  alert('Du hast auf "Artikel merken" geklickt!')
                }
              />
            </GridItem>
          ))
        : data &&
          data.article &&
          data.article.recentNews &&
          data.article.recentNews.map((news) => (
            <GridItem key={news.identifier} width={1} mb={4} p={0}>
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
                  readingTime: 3,
                }}
                loading={false}
                hero={hero}
                onBookmarkClick={() =>
                  alert('Du hast auf "Artikel merken" geklickt!')
                }
              />
            </GridItem>
          ))}
    </Grid>
  );
};

export const defaultStory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isBookmarked, setIsBookmarked] = useState(false);

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
      pro={boolean('Pro-Artikel?', false, 'card')}
      isBookmarked={isBookmarked}
      onBookmarkClick={() => setIsBookmarked(!isBookmarked)}
    />
  );
};

defaultStory.storyName = 'Default';

export const heroLayout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isBookmarked, setIsBookmarked] = useState(false);

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
          isBookmarked={isBookmarked}
          onBookmarkClick={() => setIsBookmarked(!isBookmarked)}
        />
      </Box>
      <Box>
        <LegacyNewsCard
          loading={false}
          hero
          news={news}
          sponsored={boolean('Sponsored', false, 'card')}
          isBookmarked={isBookmarked}
          onBookmarkClick={() => setIsBookmarked(!isBookmarked)}
        />
      </Box>
    </>
  );
};

heroLayout.storyName = 'Hero Layout';

export const feedLayout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isBookmarked, setIsBookmarked] = useState(false);

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
          isBookmarked={isBookmarked}
          onBookmarkClick={() => setIsBookmarked(!isBookmarked)}
        />
      </Box>
      <Box>
        <LegacyNewsCard
          loading={false}
          news={news}
          sponsored={boolean('Sponsored', false, 'card')}
          popular={boolean('Popular', false, 'card')}
          isBookmarked={isBookmarked}
          onBookmarkClick={() => setIsBookmarked(!isBookmarked)}
        />
      </Box>
    </>
  );
};

feedLayout.storyName = 'Feed Layout';

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

liveData.storyName = 'Live-Daten';
