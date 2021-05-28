import React from 'react';
import { number, select } from '@storybook/addon-knobs';

import { Icon } from '@t3n/components';
import {
  MaterialCheck,
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff,
} from '@t3n/icons';
import { theme } from '@t3n/theme';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Content/Icon',
  component: Icon,
  decorators: [storyContainerDecorator],
};

const icons = {
  MaterialCheck,
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff,
};

type IconType =
  | 'MaterialCheck'
  | 'MaterialClear'
  | 'MaterialVisibility'
  | 'MaterialVisibilityOff';

export const defaultStory = () => {
  const iconOption = select<IconType>(
    'icon',
    Object.keys(icons) as IconType[],
    'MaterialCheck'
  );

  return (
    <Icon
      component={icons[iconOption]}
      fill={select(
        'fill',
        [
          ...Object.keys(theme.colors.text).map((val) => `text.${val}`),
          ...Object.keys(theme.colors.feedback).map((val) => `feedback.${val}`),
          ...Object.keys(theme.colors.social).map((val) => `social.${val}`),
        ],
        'text.highlight'
      )}
      width={number('width', 24, {
        range: true,
        min: 8,
        max: 80,
        step: 8,
      })}
    />
  );
};

defaultStory.story = {
  name: 'Default',
};
