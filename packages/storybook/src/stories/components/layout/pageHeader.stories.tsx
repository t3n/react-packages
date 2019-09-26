import React from 'react';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PageHeader, Section, Box } from '@t3n/components';

export default {
  title: 'Components|Layout/PageHeader',
  component: PageHeader,
  decorators: [withKnobs]
};

export const defaultStory = () => (
  <>
    <PageHeader transparent={boolean('Transparenter Hintergrund', false)} />
    <Section variant="secondary">
      <Box pt={6}>Content</Box>
    </Section>
  </>
);

defaultStory.story = {
  name: 'Default'
};

export const displayUserMenu = () => <PageHeader />;

defaultStory.story = {
  name: 'Mit Usermenü'
};
