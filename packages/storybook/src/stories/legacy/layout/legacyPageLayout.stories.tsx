import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  Box,
  LegacyBreadcrumb,
  LegacyBreadcrumbItem,
  LegacyPageLayout,
  LegacySection,
  Text,
} from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';
import { tagNavTags } from './legacyHeader.stories';

const meta: Meta<typeof LegacyPageLayout> = {
  component: LegacyPageLayout,
  title: 'Legacy/Layout/PageLayout',
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
    privacyManagerId: '123456',
    tags: tagNavTags,
    headerCampaignUrl: 'https://t3n.de/headercampaign',
    headerCampaignImage:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign.png',
    headerCampaignImageMobile:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign-mobile.png',
    isPlusUser: true,
    isProMember: true,
    userLoading: false,
    userEmail: 'john.doe@beispiel.de',
    children: (
      <>
        <LegacyBreadcrumb>
          <LegacyBreadcrumbItem label="Home" href="/" />
          <LegacyBreadcrumbItem label="News" href="/news/" />
          <LegacyBreadcrumbItem label="Das hier ist ein wirklich langer Titel eines Artikels um zu demonstrieren, wie die Scrollversion aussieht" />
        </LegacyBreadcrumb>
        <LegacySection variant="primary" narrow>
          <Text my={9}>Narrow Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary" wide>
          <Text my={9}>Wide Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof LegacyPageLayout>;

export const legacyPageLayout: Story = {};
