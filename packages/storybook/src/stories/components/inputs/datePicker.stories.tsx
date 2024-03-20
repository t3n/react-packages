/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';

import { Box, DatePicker } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/Inputs/DatePicker',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    hideReset: false,
    withTime: false,
    date: null,
  },
  render: function Render(args) {
    const [_, updateArgs] = useArgs<{
      date: moment.Moment | null;
    }>();
    return (
      <Box height="50vh">
        <DatePicker
          {...args}
          onChange={(date: moment.Moment | null) => updateArgs({ date })}
        />
      </Box>
    );
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const datePicker: Story = {};

export const withTime: Story = {
  args: { withTime: true },
};
