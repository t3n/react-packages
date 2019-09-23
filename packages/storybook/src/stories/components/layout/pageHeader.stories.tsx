import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader } from '@t3n/components';

export default {
  title: 'Components|Layout/PageHeader',
  component: PageHeader,
  decorators: [withKnobs]
};

export const defaultStory = () => <PageHeader />;

defaultStory.story = {
  name: 'Default'
};

export const displayUserMenu = () => <PageHeader />;

defaultStory.story = {
  name: 'Mit Usermenü'
};
