import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Badge, Box } from '@t3n/components';
import { BadgeProps } from '@t3n/components/src/Badge';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Content/Badge',
  component: Badge,
  decorators: [storyContainerDecorator],
};

const colors: BadgeProps['variant'][] = ['inverse', 'light', 'highlight'];

export const defaultStory = () => {
  const badgeText = text('Badge Text', 'ANZEIGE');

  return (
    <Box display="flex" style={{ gap: 4 }}>
      {colors.map((c) => (
        <Badge variant={c} key={c}>
          {badgeText}
        </Badge>
      ))}
    </Box>
  );
};

defaultStory.storyName = 'Default';
