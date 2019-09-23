import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { TitleCard } from '@t3n/components';
import { theme } from '@t3n/theme';

import { HeadingElements } from '@t3n/components/src/Heading';
import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/TitleCard',
  component: TitleCard,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const defaultStory = () => {
  const headlineTags = Object.keys(theme.textStyles).filter(
    item => item && item.charAt(0) === 'h'
  ) as HeadingElements[];

  return (
    <TitleCard
      title={text('Title', 'Default Title')}
      titleAs={select('Title Tag', headlineTags, 'h3')}
      centerTitle={boolean('Titel zentrieren?', false)}
    >
      {text(
        'Content',
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
      )}
    </TitleCard>
  );
};
