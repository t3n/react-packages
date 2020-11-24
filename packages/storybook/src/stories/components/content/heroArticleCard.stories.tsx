import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Grid, GridItem, HeroCard } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Content/HeroArticleCard',
  component: HeroCard,
  decorators: [
    (story: any) => (
      <Grid justifyContent="center">
        <GridItem width={1 / 3}>{story()}</GridItem>
      </Grid>
    ),
    storyContainerContentDecorator,
  ],
};

export const defaultStory = () => (
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
      new Date(text('Veröffentlicht am ', 'Sat, 10 Aug 2019 07:00:04 GMT'))
    }
  />
);

defaultStory.story = {
  name: 'Default',
};
