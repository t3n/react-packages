import React from 'react';
import { storiesOf } from '@storybook/react';

import { Ratio } from '@t3n/components';
import { withKnobs, number } from '@storybook/addon-knobs';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Layout/Ratio', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <StoryContainer>
        <Ratio ratio={number('Verhältnis', 16 / 9)} bg="background.secondary" />
      </StoryContainer>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
