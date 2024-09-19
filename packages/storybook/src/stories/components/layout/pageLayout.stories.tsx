import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  Content,
  H1,
  PageLayout,
  Section,
  Text,
  UserMenu,
  VisualSection,
} from '@t3n/components';

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  title: 'Components/Layout/PageLayout',
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    noContentPadding: false,
    showHeader: true,
    light: false,
    showPrivacySettingsLink: true,
    privacyManagerId: '123456',
  },
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const pageLayout: Story = {};

export const withUserMenu: Story = {
  args: {
    headerContent: (
      <UserMenu
        light={false}
        isPlusUser={false}
        isProMember={false}
        userEmail="john.doe@example.com"
      />
    ),
  },
};

export const withTransparentHeader: Story = {
  args: {
    initialTransparent: true,
    children: (
      <>
        <VisualSection variant="highlight">
          <Content>
            <H1 mb={8} color="shades.white">
              Some Headline
            </H1>
          </Content>
        </VisualSection>
        <Section variant="primary">
          <Text my={9}>Dummy Section</Text>
        </Section>
        <Section variant="secondary">
          <Text my={9}>Dummy Section</Text>
        </Section>
      </>
    ),
  },
};
