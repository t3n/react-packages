import React, { useState } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { theme } from '@t3n/theme';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { Checkbox, Section } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Checkbox',
  component: Checkbox,
  decorators: [withKnobs, storyContainerContentDecorator]
};

const CheckboxComponent: React.FC = () => {
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
  const sectionVariant = select('Section', ['primary', 'inverse'], 'primary');

  return (
    <Section variant={sectionVariant}>
      <Checkbox
        colorScheme={sectionVariant === 'primary' ? 'light' : 'dark'}
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

export const simple = () => <CheckboxComponent />;
