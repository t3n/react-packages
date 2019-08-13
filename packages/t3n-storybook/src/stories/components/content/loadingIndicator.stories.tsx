import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Content, LoadingIndicator } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add('Loading indicator', () => {
    return <LoadingIndicator height="2rem" p={2} />;
  });
