import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Form|Input', module).add('Simple Input', () => (
  <StoryContainer>
    <Input
      defaultValue="45234"
      type="text"
      placeholder="Password"
      fixedPlaceholder="Enter:"
      onChange={e => {
        console.log(e.currentTarget.value);
      }}
    />
  </StoryContainer>
));
