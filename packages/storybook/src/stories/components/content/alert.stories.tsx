import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertText } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Content/Alert',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const success: Story = {
  args: {
    status: 'success',
    children: <AlertText>Dies ist eine Erfolgsmeldung</AlertText>,
  },
};

export const notice: Story = {
  args: {
    status: 'notice',
    children: <AlertText>Merke dir dies und das!</AlertText>,
  },
};

export const warning: Story = {
  args: {
    status: 'warning',
    children: <AlertText>Dies ist eine Warnung!</AlertText>,
  },
};

export const error: Story = {
  args: {
    status: 'error',
    children: <AlertText>So geht das nicht. Error!</AlertText>,
  },
};
