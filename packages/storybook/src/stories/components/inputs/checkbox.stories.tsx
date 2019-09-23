import React, { useState } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { theme } from '@t3n/theme';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { Checkbox } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Checkbox',
  component: Checkbox,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const simple = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [checked, setChecked] = useState(false);

  const showFeedback = boolean('Zeige Feedback', false);
  const feedbackColor = select(
    'Feedback',
    Object.keys(theme.colors.feedback) as ThemeFeedbackColor[],
    'success'
  );

  return (
    <Checkbox
      disabled={boolean('disable', false)}
      feedbackColor={showFeedback ? feedbackColor : undefined}
      checked={checked}
      value="true"
      name={text('Name', 'Name checkbox')}
      onChange={() => {
        setChecked(!checked);
      }}
      label={text('Label', 'Label placeholder')}
    />
  );
};
