/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';

import { Box, Button, H3, Slider, Text } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Components/Inputs/Slider',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    min: 0,
    max: 100,
    step: 10,
    labels: ['0', '100'],
    value: 50,
  },
  render: function Render(args) {
    const [_, updateArgs] = useArgs<{
      value: number;
    }>();

    return (
      <>
        <Slider
          {...args}
          onChange={(newValue) => {
            updateArgs({ value: newValue });
          }}
        />
        <Text>Selected value: {args.value}</Text>
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const slider: Story = {};
