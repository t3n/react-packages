import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import type { Story } from '@storybook/react';

import { Ad } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Ad,
  title: 'Components/Content/Ad',
  decorators: [storyContainerDecorator],
};

export const defaultStory: Story = () => (
  <Ad name={text('Name', 'p0')} preview={boolean('Preview', true)} />
);

defaultStory.storyName = 'Default';
