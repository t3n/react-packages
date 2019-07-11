import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { InputGroup } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Form|InputGroup', module)
  .addDecorator(withKnobs)
  .add('Simple InputGroup', () => (
    <StoryContainer>
      <InputGroup
        type={select(
          'type',
          {
            text: 'text',
            email: 'email',
            password: 'password'
          },
          'text'
        )}
        label={text('label', 'Label')}
        placeholder={text('placeholder', 'Text eingeben...')}
      />
    </StoryContainer>
  ));
