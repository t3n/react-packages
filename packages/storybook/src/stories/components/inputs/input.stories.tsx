import React from 'react';

import { Input, Text } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  decorators: [storyContainerContentDecorator],
};

export const defaultStory = () => (
  <>
    <Text>Ohne Value und Placeholder</Text>
    <Input width={0.5} />
    <Text>Mit Placeholder</Text>
    <Input width={0.5} placeholder="Placeholder" />
    <Text>Mit Value</Text>
    <Input width={0.5} defaultValue="Max Mustermann" />
  </>
);

defaultStory.storyName = 'Default';

export const disabled = () => (
  <>
    <Text>Ohne Value und Placeholder</Text>
    <Input disabled width={0.5} />
    <Text>Mit Placeholder</Text>
    <Input disabled width={0.5} placeholder="Placeholder" />
    <Text>Mit Value</Text>
    <Input disabled width={0.5} defaultValue="Max Mustermann" />
  </>
);

export const focused = () => <Input isFocused width={0.5} />;

focused.storyName = 'Focus';

export const types = () => (
  <>
    <Text>Text:</Text>
    <Input type="text" width={0.5} defaultValue="Max Mustermann" />
    <Text>E-Mail:</Text>
    <Input type="email" width={0.5} defaultValue="support@t3n.de" />
    <Text>Password:</Text>
    <Input type="password" width={0.5} defaultValue="support@t3n.de" />
  </>
);

types.storyName = 'Types';

export const errorStates = () => (
  <Input error width={0.5} defaultValue="Invalid" />
);
