import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import type { Story } from '@storybook/react';

import { LegacyAd } from '@t3n/components';
import { LegacyAdName } from '@t3n/components/src/LegacyAd/LegacyAd';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: LegacyAd,
  title: 'Legacy/Content/Ad',
  decorators: [storyContainerDecorator],
};

export const defaultStory: Story = () => (
  <LegacyAd
    name={
      select(
        'Name',
        [
          'T3N_D_Right',
          'T3N_D_Incontent-1',
          'T3N_D_Top',
          'T3N_D_Incontent-2',
          'T3N_D_Incontent-3',
          'T3N_D_Incontent-4',
          'T3N_D_Incontent-5',
          'T3N_D_Incontent-6',
          'T3N_D_Incontent-7',
          'T3N_D_Incontent-8',
          'T3N_D_Incontent-9',
          'T3N_D_Incontent-10',
          'T3N_D_Incontent-11',
          'T3N_D_Sidebar-1',
          'T3N_D_Sidebar-2',
          'T3N_D_Sidebar-3',
          'T3N_M_Incontent-1',
          'T3N_M_Incontent-2',
          'T3N_M_Incontent-3',
          'T3N_M_Incontent-4',
          'T3N_M_Incontent-5',
          'T3N_M_Incontent-6',
          'T3N_M_Incontent-7',
          'T3N_M_Incontent-8',
          'T3N_M_Incontent-9',
          'T3N_M_Incontent-10',
          'T3N_M_Sticky',
        ],
        'T3N_D_Top'
      ) as LegacyAdName
    }
    preview={boolean('Preview', true)}
    forceBackground={boolean('Force Background?', false)}
    forceHint={boolean('Force Hint?', false)}
  />
);

defaultStory.storyName = 'Default';
