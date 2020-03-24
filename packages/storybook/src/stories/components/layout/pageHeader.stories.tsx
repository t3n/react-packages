import React from 'react';
import styled from 'styled-components';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PageHeader, Section, Box } from '@t3n/components';

const StoryWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  z-index: 1;
`;

export default {
  title: 'Components|Layout/PageHeader',
  component: PageHeader,
  decorators: [
    withKnobs,
    (story: any) => <StoryWrapper>{story()}</StoryWrapper>,
  ],
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
  name: 'Default',
};

export const displayUserMenu = () => <PageHeader />;

defaultStory.story = {
  name: 'Mit Usermenü',
};

export const linkedLogo = () => <PageHeader logoHref="https://t3n.de" />;

linkedLogo.story = {
  name: 'Verlinktes Logo',
};
