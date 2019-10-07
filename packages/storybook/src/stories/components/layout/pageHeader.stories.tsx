import React from 'react';
import styled from 'styled-components';

import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader } from '@t3n/components';

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
    (story: any) => <StoryWrapper>{story()}</StoryWrapper>
  ]
};

export const defaultStory = () => <PageHeader />;

defaultStory.story = {
  name: 'Default'
};

export const displayUserMenu = () => <PageHeader />;

defaultStory.story = {
  name: 'Mit Usermenü'
};
