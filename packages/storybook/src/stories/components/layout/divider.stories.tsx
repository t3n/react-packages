import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { Content, Divider } from '@t3n/components';
import { DividerVariants } from '@t3n/components/src/Divider/Divider';

import { theme } from '@t3n/theme';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Layout/Divider', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Default',
    () => (
      <Divider
        width={number('Breite', 0.3, {
          range: true,
          min: 0,
          max: 1,
          step: 0.1
        })}
        backgroundColor={select<DividerVariants>(
          'Farbe',
          Object.keys(theme.colors.background) as DividerVariants[],
          'secondary'
        )}
      />
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
