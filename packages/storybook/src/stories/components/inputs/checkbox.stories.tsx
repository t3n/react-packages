import React, { useState } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Checkbox, Section } from '@t3n/components';
import { theme } from '@t3n/theme';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  decorators: [storyContainerDecorator],
};

export const DefaultStory = () => {
  const [checked, setChecked] = useState(false);

  const showFeedback = boolean('Zeige Feedback', false);
  const feedbackColor = select(
    'Feedback',
    Object.keys(theme.colors.feedback) as ThemeFeedbackColor[],
    'success'
  );
  const name = text('Name', 'Name checkbox');
  const disabled = boolean('disable', false);
  const label = text('Label', 'Label placeholder');
  const checkboxVariant = select(
    'Variante Checkbox',
    ['light', 'dark'],
    'light'
  );

  return (
    <Section variant={checkboxVariant === 'light' ? 'primary' : 'inverse'}>
      <Checkbox
        variant={checkboxVariant}
        disabled={disabled}
        feedbackColor={showFeedback ? feedbackColor : undefined}
        checked={checked}
        value="true"
        name={name}
        onChange={() => {
          setChecked(!checked);
        }}
        label={label}
      />
    </Section>
  );
};

DefaultStory.story = {
  name: 'Default',
};
