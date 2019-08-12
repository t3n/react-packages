import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ArticleCard, Grid, GridItem, Text, Content } from '@t3n/components';
import { NewsCard } from '@t3n/data-components';

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

const ArticleCardWithData = () => {
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
            <ArticleCard
              url={news.url}
              key={news.identifier}
              articleType={news.type}
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
            <ArticleCard
              type={select(
                'Darstellung',
                { Hero: 'HERO', Author: 'AUTHOR-CARD' },
                'HERO'
              )}
              author={{
                name: text('Author', 'Andreas Floemer'),
                avatar: text(
                  'Author-Avatar',
                  'https://storage.googleapis.com/t3n-de/neos/bc7fce93490239419c6588eef4913653b89a8af2/afr_t3n.jpg'
                )
              }}
              articleType={text('Artikel-Typ', 'News')}
              publishedAt={
                new Date(
                  text('Veröffentlicht am ', 'Sat, 10 Aug 2019 07:00:04 GMT')
                )
              }
              url={text(
                'URL',
                'https://t3n.de/news/pixel-4-4-xl-geruechte-ausstattung-design-1186571/'
              )}
              imageUrl={text(
                'Artikel-Bild',
                'https://t3n.de/news/wp-content/uploads/2019/08/pixel-4-render-phone-designer.jpg'
              )}
              teaser={text(
                'Teaser',
                'Mit dem Pixel 4 will Google Innovationen vorantreiben und seine Smartphone-Familie weiter in die obere Liga schieben. Über die neue Generation ist mittlerweile vieles bekannt. Wir fassen zusammen.'
              )}
              title={text(
                'Titel',
                'Google Pixel 4 und 4 XL: So sehen sie aus, das steckt wohl drin'
              )}
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
            <ArticleCard
              type={select(
                'Darstellung',
                { Hero: 'HERO', Author: 'AUTHOR-CARD' },
                'AUTHOR-CARD'
              )}
              author={{
                name: text('Author', 'Andreas Floemer'),
                avatar: text(
                  'Author-Avatar',
                  'https://storage.googleapis.com/t3n-de/neos/bc7fce93490239419c6588eef4913653b89a8af2/afr_t3n.jpg'
                )
              }}
              articleType={text('Artikel-Typ', 'News')}
              publishedAt={
                new Date(
                  text('Veröffentlicht am ', 'Sat, 10 Aug 2019 07:00:04 GMT')
                )
              }
              url={text(
                'URL',
                'https://t3n.de/news/pixel-4-4-xl-geruechte-ausstattung-design-1186571/'
              )}
              imageUrl={text(
                'Artikel-Bild',
                'https://t3n.de/news/wp-content/uploads/2019/08/pixel-4-render-phone-designer.jpg'
              )}
              teaser={text(
                'Teaser',
                'Mit dem Pixel 4 will Google Innovationen vorantreiben und seine Smartphone-Familie weiter in die obere Liga schieben. Über die neue Generation ist mittlerweile vieles bekannt. Wir fassen zusammen.'
              )}
              title={text(
                'Titel',
                'Google Pixel 4 und 4 XL: So sehen sie aus, das steckt wohl drin'
              )}
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
  .add('News-Kachel', () => {
    return <NewsCard identifier="123" />;
  })
  .add(
    'Recent-News',
    () => {
      return (
        <div>
          <ArticleCardWithData />
        </div>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  );
