import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Content, Placeholder } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/Loading Indicator', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add('Default', () => {
    return <Placeholder height="2rem" p={2} />;
  });
