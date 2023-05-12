import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import type { Story } from '@storybook/react';

import { Ad, Box } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Ad,
  title: 'Components/Content/Ad',
  decorators: [storyContainerDecorator],
};

export const defaultStory: Story = () => (
  <Box
    backgroundColor="background.secondary"
    width="1024px"
    height="1000px"
    pt="4"
  >
    <Ad name={text('Name', 'T3N_D_Top')} preview={boolean('Preview', true)} />
  </Box>
);

defaultStory.storyName = 'Default';
