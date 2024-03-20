import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, FormGroup, Input, Link, Text, Textarea } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta = {
  title: 'Components/Form/FormGroup',
  decorators: [storyContainerContentDecorator],
  parameters: { docs: { page: null } },
};

export default meta;
type Story = StoryObj;

export const formGroup: Story = {
  render: () => (
    <Box width={[1, 1, 0.5]}>
      <FormGroup label="Vorname">
        <Input />
      </FormGroup>
      <FormGroup label="Nachricht">
        <Textarea maxLength={200} />
      </FormGroup>
    </Box>
  ),
};

export const disabled: Story = {
  render: () => (
    <Box width={[1, 1, 0.5]}>
      <FormGroup label="Vorname">
        <Input disabled />
      </FormGroup>
      <FormGroup label="Nachricht">
        <Textarea disabled maxLength={200} />
      </FormGroup>
    </Box>
  ),
};

export const error: Story = {
  render: () => (
    <Box width={[1, 1, 0.5]}>
      <FormGroup label="Vorname" errorMessage="Dies ist eine Fehlermeldung">
        <Input error />
      </FormGroup>
      <FormGroup label="Nachricht" errorMessage="Dies ist eine Fehlermeldung">
        <Textarea error maxLength={200} />
      </FormGroup>
    </Box>
  ),
};

export const labelVariants: Story = {
  render: () => (
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
  ),
};
