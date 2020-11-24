import React from 'react';

import { Input, FormGroup, Box, Text, Link, Textarea } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Form/FormGroup',
  decorators: [storyContainerDecorator],
  parameters: { docs: { page: null } },
};

export const defaultStory = () => (
  <Box width={[1, 1, 0.5]}>
    <FormGroup label="Vorname">
      <Input />
    </FormGroup>
    <FormGroup label="Nachricht">
      <Textarea maxLength={200} />
    </FormGroup>
  </Box>
);

defaultStory.story = {
  name: 'Default',
};

export const errorState = () => (
  <Box width={[1, 1, 0.5]}>
    <FormGroup label="Vorname" errorMessage="Dies ist eine Fehlermeldung">
      <Input error />
    </FormGroup>
    <FormGroup label="Nachricht" errorMessage="Dies ist eine Fehlermeldung">
      <Textarea error maxLength={200} />
    </FormGroup>
  </Box>
);

errorState.story = {
  name: 'Mit Error',
};

export const labelVariants = () => (
  <Box width={[1, 1, 0.5]}>
    <Text bold>Secondary Label</Text>
    <FormGroup label="Vorname" labelSecondary="(optional)">
      <Input />
    </FormGroup>

    <Text bold>Hinteres Label</Text>
    <FormGroup
      label="Vorname"
      labelEndContent={
        <Link variant="secondary" href="/">
          Passwort vergessen?
        </Link>
      }
    >
      <Input />
    </FormGroup>
  </Box>
);

labelVariants.story = {
  name: 'Label-Varianten',
};
