import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { PageFooter } from '@t3n/components';

export default {
  title: 'Components|Layout/PageFooter',
  component: PageFooter,
  decorators: [withKnobs]
};

export const defaultStory = () => <PageFooter contactLink="mailto:hi@t3n.de" />;

defaultStory.story = {
  name: 'Default'
};
