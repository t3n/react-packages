import React from 'react';

import { storiesOf } from '@storybook/react';
import { InputGroup } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Form|InputGroup', module).add('Simple InputGroup', () => (
  <StoryContainer>
    <InputGroup
      type="password"
      label="Password"
      placeholder="Passwort eingeben"
      onChange={e => {
        console.log(e.currentTarget.value);
      }}
    />
  </StoryContainer>
));
