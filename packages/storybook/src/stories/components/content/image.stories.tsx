import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Image } from '@t3n/components';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/Image',
  component: Image,
  decorators: [withKnobs, storyContainerDecorator]
};

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 5
};

export const defaultStory = () => (
  <Image
    src={text(
      'Bild-URL',
      'https://assets.t3n.sc/news/wp-content/uploads/2019/08/tier-e-scooter-hero.jpg'
    )}
    alt={text('Alt-Text', '')}
    width={text('Breite', '')}
    height={text('Höhe', '')}
    processConfiguration={{
      fit: boolean('Crop?', true) ? 'crop' : undefined,
      quality: number('Qualität', 65, options),
      aspectRatio: '16:9'
    }}
  />
);

defaultStory.story = {
  name: 'Default'
};
