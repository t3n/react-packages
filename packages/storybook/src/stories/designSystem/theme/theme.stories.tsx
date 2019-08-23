import React from 'react';
import { storiesOf } from '@storybook/react';
import { theme } from '@t3n/theme';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Design System|Theme', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Theme Configuration', () => (
    <pre>{JSON.stringify(theme, null, 2)}</pre>
  ));
