import React, { useState } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { theme } from '@t3n/theme';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { RadioButton, Section } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/RadioButton',
  component: RadioButton,
  decorators: [withKnobs, storyContainerDecorator],
};

export const DefaultStory = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

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
      {Array(3)
        .fill(null)
        .map((v, i) => (
          <RadioButton
            variant={checkboxVariant}
            disabled={disabled}
            feedbackColor={showFeedback ? feedbackColor : undefined}
            checked={activeButtonIndex === i}
            value="true"
            name={name}
            onChange={() => {
              setActiveButtonIndex(i);
            }}
            label={label}
          />
        ))}
    </Section>
  );
};

DefaultStory.story = {
  name: 'Default',
};
