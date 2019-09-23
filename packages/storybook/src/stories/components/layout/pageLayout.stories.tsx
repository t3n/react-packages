import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { PageLayout } from '@t3n/components';

export default {
  title: 'Components|Layout/PageLayout',
  component: PageLayout,
  decorators: [withKnobs]
};

export const defaultStory = () => (
  <PageLayout
    noContentPadding={boolean('Kein Inhaltsabstand', false)}
    showHeader={boolean('Mit Header', true)}
  >
    Content
  </PageLayout>
);

defaultStory.story = {
  name: 'Default'
};
