import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { NewsCard, Grid, GridItem, Text, Content } from '@t3n/components';

import CardReadme from '@t3n/components/src/Card/CARD.md';
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

const NewsCardWithData = () => {
  const { data, loading } = useQuery<recentNews, recentNewsVariables>(
    RECENT_NEWS,
    {
      variables: {
        limit: number('Anzahl der Kacheln', 6, {
          min: 1,
          max: 10,
          range: false,
          step: 1
        })
      }
    }
  );

  if (loading) {
    return (
      <div>
        <Text>Lade News ...</Text>
      </div>
    );
  }

  if (data && data.article && data.article.recentNews) {
    return (
      <Grid wide justifyContent="center">
        {data.article.recentNews.map(news => (
          <GridItem width={[1, 1, 1 / 3]} mb={3}>
            <NewsCard
              url={news.url}
              key={news.identifier}
              type={select(
                'Darstellung',
                { Hero: 'HERO', Author: 'AUTHOR-CARD' },
                'HERO'
              )}
              title={news.title}
              teaser={news.teaser}
              imageUrl={news.imageUrl}
              publishedAt={new Date(news.date)}
              author={{
                name: `${news.author.firstName} ${news.author.lastName}`,
                avatar: news.author.avatarUrl || ''
              }}
            />
          </GridItem>
        ))}
      </Grid>
    );
  }
  return <p>Es konnten leider keine aktuellen News geladen werden</p>;
};

storiesOf('Components|Content/NewsCards', module)
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
    'Live-Daten',
    () => {
      return (
        <div>
          <NewsCardWithData />
        </div>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  );
