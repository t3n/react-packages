import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  text,
  select,
  boolean
} from '@storybook/addon-knobs';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  Grid,
  GridItem,
  Content,
  AuthorCard,
  HeroCard,
  NewsCard
} from '@t3n/components';

import CardReadme from '@t3n/components/src/Card/CARD.md';
import { NewsCardType } from '@t3n/components/src/NewsCard/NewsCard';
import StoryContainer from '../../../components/StoryContainer';
import { recentNews, recentNewsVariables } from './__generated__/recentNews';

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
  fakeLoading
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
        limit
      }
    }
  );

  return (
    <Grid wide justifyContent="center">
      {loading || fakeLoading
        ? new Array(limit).fill(null).map((el, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <GridItem key={idx} width={[1, 1, 1 / 3]} mb={3}>
              <NewsCard loading type={type} />
            </GridItem>
          ))
        : data &&
          data.article &&
          data.article.recentNews &&
          data.article.recentNews.map(news => (
            <GridItem key={news.identifier} width={[1, 1, 1 / 3]} mb={3}>
              <NewsCard
                news={{
                  ...news,
                  author: {
                    name: `${news.author.firstName || ''} ${news.author
                      .lastName || ''}`,
                    avatar: news.author.avatarUrl || ''
                  },
                  publishedAt: new Date(news.date)
                }}
                loading={false}
                type={type}
              />
            </GridItem>
          ))}
    </Grid>
  );
};

storiesOf('Components|Content/ArticleCard', module)
  .addParameters({
    readme: {
      sidebar: CardReadme
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Hero-Card',
    () => {
      return (
        <Grid justifyContent="center">
          <GridItem width={1 / 3}>
            <HeroCard
              author={text('Author', 'Andreas Floemer')}
              url={text(
                'URL',
                'https://t3n.de/news/pixel-4-4-xl-geruechte-ausstattung-design-1186571/'
              )}
              imageUrl={text(
                'Artikel-Bild',
                'https://t3n.de/news/wp-content/uploads/2019/08/pixel-4-render-phone-designer.jpg'
              )}
              title={text(
                'Titel',
                'Google Pixel 4 und 4 XL: So sehen sie aus, das steckt wohl drin'
              )}
              publishedAt={
                new Date(
                  text('Veröffentlicht am ', 'Sat, 10 Aug 2019 07:00:04 GMT')
                )
              }
            />
          </GridItem>
        </Grid>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  )
  .add(
    'Author-Card',
    () => {
      return (
        <Grid justifyContent="center">
          <GridItem width={1 / 3}>
            <AuthorCard
              author={{
                name: text('Author', 'Andreas Floemer'),
                avatar: text(
                  'Author-Avatar',
                  'https://storage.googleapis.com/t3n-de/neos/bc7fce93490239419c6588eef4913653b89a8af2/afr_t3n.jpg'
                )
              }}
              url={text(
                'URL',
                'https://t3n.de/news/pixel-4-4-xl-geruechte-ausstattung-design-1186571/'
              )}
              title={text(
                'Titel',
                'Google Pixel 4 und 4 XL: So sehen sie aus, das steckt wohl drin'
              )}
              articleType={text('Artikel-Typ', 'News')}
            />
          </GridItem>
        </Grid>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  )
  .add(
    'Recent-News',
    () => {
      const limit = number('Anzahl der Kacheln', 6, {
        min: 1,
        max: 10,
        range: false,
        step: 1
      });
      const fakeLoading = boolean('Fake ladestatus', false);

      return (
        <div>
          <ArticleCardWithData limit={limit} fakeLoading={fakeLoading} />
        </div>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  );
