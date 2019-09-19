import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input, FormGroup } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Inputs/Input', module)
  .add(
    'Simple Input',
    () => (
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
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  .add('Form Group', () => (
    <StoryContainer>
      <FormGroup label="Vorname">
        <Input
          type="text"
          placeholder="Johannes"
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
        />
      </FormGroup>
      <FormGroup label="Vorname" errorMessage="Dies ist eine Error-Message">
        <Input
          type="text"
          placeholder="Johannes"
          error
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
        />
      </FormGroup>
    </StoryContainer>
  ));
