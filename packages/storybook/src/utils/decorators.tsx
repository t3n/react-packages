import React from 'react';

import { Content } from '@t3n/components';

import StoryContainer from '../components/StoryContainer';

export const storyContainerDecorator = (story: any) => (
  <StoryContainer>{story()}</StoryContainer>
);

export const contentDecorator = (story: any) => <Content>{story()}</Content>;

export const storyContainerContentDecorator = (story: any) => (
  <StoryContainer>
    <Content>{story()}</Content>
  </StoryContainer>
);
