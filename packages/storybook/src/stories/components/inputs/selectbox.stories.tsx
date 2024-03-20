import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, SelectBox } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const colorOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange', isDisabled: true },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

const flavourOptions = [
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'salted-caramel', label: 'Salted Caramel' },
];

const groupedOptions = [
  {
    label: 'Eissorten',
    options: flavourOptions,
  },
  {
    label: 'Farben',
    options: colorOptions,
  },
];

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
  title: 'Components/Inputs/SelectBox',
  decorators: [
    (Story) => {
      return (
        <Box height="35vh">
          <Story />
        </Box>
      );
    },
    storyContainerContentDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    autoFocus: false,
    disabled: false,
    hideReset: false,
    loading: false,
    multiSelect: false,
    closeMenuOnSelect: true,
    placeholder: 'Auswählen',
    searchable: false,
    error: false,
    options: groupedOptions,
  },
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const selectBox: Story = {};

export const value: Story = {
  args: { defaultValue: colorOptions[3] as any },
};

export const noGroups: Story = {
  args: { options: colorOptions },
};

export const multiSelect: Story = {
  args: { multiSelect: true, closeMenuOnSelect: false },
};

export const disabled: Story = {
  args: { disabled: true },
};

export const autoFocus: Story = {
  args: { autoFocus: true },
};

export const searchable: Story = {
  args: { searchable: true },
};

export const hideReset: Story = {
  args: { hideReset: true },
};

export const disabledOption: Story = {
  args: { options: colorOptions.map((o) => ({ ...o, isDisabled: true })) },
};

export const loading: Story = {
  args: { loading: true },
};

export const error: Story = {
  args: { error: true },
};

export const creatable: Story = {
  args: { creatable: true },
};

const handleLoadOptions = (
  input: string,
  callback: (options: { value: string; label: string }[]) => void,
) => {
  setTimeout(() => {
    callback(colorOptions.filter((e) => e.label.toLowerCase().includes(input)));
  }, 1000);
};

const renderLoadingMessage = () => {
  return 'Lade mehr Daten ...';
};

export const async: Story = {
  args: {
    async: true,
    loadOptions: handleLoadOptions,
    loadingMessage: renderLoadingMessage,
    defaultOptions: [],
    options: [],
  },
};
