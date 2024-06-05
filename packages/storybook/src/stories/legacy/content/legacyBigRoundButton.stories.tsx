import { Meta, StoryObj } from '@storybook/react';

import { LegacyBigRoundButton } from '@t3n/components';
import { MaterialRssFeed, SocialMastodon } from '@t3n/icons';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyBigRoundButton> = {
  component: LegacyBigRoundButton,
  title: 'Legacy/Content/BigRoundButton',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    icon: SocialMastodon,
    url: 'https://t3n.de',
    tooltipText: 'Das ist der Tooltip-Text!',
    rel: 'nofollow',
  },
};

export default meta;
type Story = StoryObj<typeof LegacyBigRoundButton>;

export const bigRoundButton: Story = {};
