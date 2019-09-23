import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Grid, GridItem, AuthorCard } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/AuthorArticleCard',
  component: AuthorCard,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const defaultStory = () => (
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
);

defaultStory.story = {
  name: 'Default',
  decorators: [
    (story: any) => (
      <Grid justifyContent="center">
        <GridItem width={1 / 3}>{story()}</GridItem>
      </Grid>
    )
  ]
};
