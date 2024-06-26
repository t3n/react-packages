import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LegacyAd, Text } from '@t3n/components';

import { secondaryStoryContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyAd> = {
  component: LegacyAd,
  title: 'Legacy/Content/Ad',
  decorators: [
    (StoryComp) => (
      <>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Text>
        <StoryComp />
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Text>
      </>
    ),
    secondaryStoryContainerDecorator,
  ],
  parameters: {
    controls: { sort: 'requiredFirst' },
    docs: {
      description: {
        component:
          'Die Ad-Komponente wird je nach Ad-Zone (name) an unterschiedlichen Stellen gerendert und unterschiedlich dargestellt. Besonderheiten gibt es bei T3N_D_Top & T3N_D_Right (Position & kein Anzeige-Label) und T3N_D_Incontent-1 (weißer Hintergrund). Der Hintergrund in den nachfolgenden Stories ist zur Veranschaulichung in unserer Hintergrundfarbe secondary gehalten.',
      },
    },
  },
  args: {
    name: 'T3N_D_Incontent-1',
    preview: false,
  },
};

export default meta;
type Story = StoryObj<typeof LegacyAd>;

export const ad: Story = {};

export const previewAd: Story = {
  args: {
    preview: true,
  },
};

export const incontent2: Story = {
  args: {
    name: 'T3N_D_Incontent-2',
  },
};

export const incontentMobile: Story = {
  args: {
    name: 'T3N_M_Incontent-2',
  },
};
