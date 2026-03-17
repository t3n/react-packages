import { Meta, StoryObj } from '@storybook/react';

import { SocialButton } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof SocialButton> = {
  component: SocialButton,
  title: 'Components/Inputs/SocialButton',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    network: 'facebook',
    $textBefore: '',
    loading: false,
    size: 'regular',
  },
};

export default meta;
type Story = StoryObj<typeof SocialButton>;

export const socialButton: Story = {};

export const socialButtonLoading: Story = {
  args: {
    loading: true,
  },
};

export const socialButtonSmall: Story = {
  args: {
    size: 'small',
  },
};

export const socialButtonBig: Story = {
  args: {
    size: 'big',
  },
};

export const socialButtonTextBefore: Story = {
  args: {
    $textBefore: 'Teilen auf',
  },
};
