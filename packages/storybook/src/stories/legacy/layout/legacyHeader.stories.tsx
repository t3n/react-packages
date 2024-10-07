import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, LegacyHeader } from '@t3n/components';
import { TagNavTagsType } from '@t3n/components/src/LegacyHeader/components/LegacyTagNav';

import { storyContainerDecorator } from '../../../utils/decorators';

export const tagNavTags: TagNavTagsType[] = [
  {
    label: 'Homeoffice 🖥',
    url: 'https://t3n.de/tag/homeoffice/',
  },
  {
    label: 't3n Adventskalender 🎄',
    url: 'https://t3n.de/adventskalender',
  },
  {
    label: 'Apple-Event',
    url: 'https://t3n.de/news/m1-macbooks-mehr-highlights-apple-event-1336654/',
  },
  {
    label: 'iPhone 12',
    url: 'https://t3n.de/tag/iphone/',
  },
  {
    label: 'PS5',
    url: 'https://t3n.de/tag/playstation/',
  },
  {
    label: 't3n Deals',
    url: 'https://t3n.de/deals/',
  },
  {
    label: 'Adobe',
    url: 'https://t3n.de/brandhub/adobe/',
  },
];

const meta: Meta<typeof LegacyHeader> = {
  component: LegacyHeader,
  title: 'Legacy/Layout/Header',
  decorators: [
    (Story) => {
      return (
        <Box width="61.25em">
          <Story />
        </Box>
      );
    },
    storyContainerDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    tags: tagNavTags,
    headerCampaignUrl: 'https://t3n.de/headercampaign',
    headerCampaignImage:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign.png',
    headerCampaignImageMobile:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign-mobile.png',
    isPlusUser: true,
    isProMember: true,
    userEmail: 'john.doe@beispiel.de',
  },
};

export default meta;
type Story = StoryObj<typeof LegacyHeader>;

export const legacyHeader: Story = {};

export const notLoggedIn: Story = {
  args: {
    isPlusUser: false,
    isProMember: false,
    userEmail: '',
  },
};
