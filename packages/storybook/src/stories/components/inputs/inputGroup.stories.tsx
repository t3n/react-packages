import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { FormGroup, Input } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Inputs/InputGroup', module)
  .addDecorator(withKnobs)
  .add(
    'Simple InputGroup',
    () => (
      <StoryContainer>
        <FormGroup label={text('label', 'Label', 'FormGroup')}>
          <Input
            type={select(
              'type',
              {
                text: 'text',
                email: 'email',
                password: 'password'
              },
              'text',
              'Input'
            )}
            placeholder={text('placeholder', 'Text eingeben...', 'Input')}
          />
        </FormGroup>
      </StoryContainer>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
