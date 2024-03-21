import React from 'react';
import { Decorator } from '@storybook/react';

import { Content, Section } from '@t3n/components';

import StoryContainer from '../components/StoryContainer';

export const storyContainerDecorator: Decorator = (Story) => (
  <StoryContainer>
    <Story />
  </StoryContainer>
);

export const secondaryStoryContainerDecorator: Decorator = (Story) => (
  <StoryContainer secondary>
    <Story />
  </StoryContainer>
);

export const contentDecorator: Decorator = (Story) => (
  <Content>
    <Story />
  </Content>
);

export const storyContainerContentDecorator: Decorator = (Story) => (
  <StoryContainer>
    <Content>
      <Story />
    </Content>
  </StoryContainer>
);

export const storyContainerSectionDecorator: Decorator = (Story) => (
  <StoryContainer>
    <Section variant="secondary">
      <Story />
    </Section>
  </StoryContainer>
);
