import React from 'react';

import { Input, FormGroup } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Input',
  component: Input,
  decorators: [storyContainerDecorator]
};

export const simple = () => (
  <Input
    type="text"
    placeholder="Firstname Lastname"
    fixedPlaceholder="Name:"
    onChange={e => {
      console.log(e.currentTarget.value);
    }}
  />
);

export const formGroup = () => (
  <>
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
  </>
);
