import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Checkbox, Content } from '@t3n/components';

import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { theme } from '@t3n/theme';
import StoryContainer from '../../../components/StoryContainer';

const CheckboxStory = () => {
  const [checked, setChecked] = useState(false);

  const showFeedback = boolean('Zeige Feedback', false);
  const feedbackColor = select(
    'Feedback',
    Object.keys(theme.colors.feedback) as ThemeFeedbackColor[],
    'success'
  );

  return (
    <StoryContainer>
      <Checkbox
        disabled={boolean('disable', false)}
        feedbackColor={showFeedback ? feedbackColor : undefined}
        checked={checked}
        name={text('Name', 'Name checkbox')}
        onChange={() => {
          setChecked(!checked);
        }}
        label={text('Label', 'Label placeholder')}
      />
    </StoryContainer>
  );
};

storiesOf('Components|Inputs/Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add('Simple Checkbox', () => <CheckboxStory />, {
    options: {
      showPanel: true
    }
  });
