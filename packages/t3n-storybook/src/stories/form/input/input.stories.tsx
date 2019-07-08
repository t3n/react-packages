import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Form|Input', module).add('Simple Input', () => (
  <StoryContainer>
    <Input
      type="text"
      placeholder="Firstname Lastname"
      fixedPlaceholder="Name:"
      onChange={e => {
        console.log(e.currentTarget.value);
      }}
    />
  </StoryContainer>
));
