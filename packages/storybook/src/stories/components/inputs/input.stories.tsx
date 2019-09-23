import React from 'react';

import { Input } from '@t3n/components';

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
