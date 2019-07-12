import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { InputGroup } from '@t3n/components';

import InputGroupReadme from '@t3n/components/src/InputGroup/INPUT_GROUP.md';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Inputs/InputGroup', module)
  .addParameters({
    readme: {
      sidebar: InputGroupReadme
    }
  })
  .addDecorator(withKnobs)
  .add(
    'Simple InputGroup',
    () => (
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
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
