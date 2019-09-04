import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Content, Loader } from '@t3n/components';
import { LoaderVariants } from '@t3n/components/src/Loader/Loader';

import { theme } from '@t3n/theme';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Default',
    () => (
      <Loader
        small={boolean('small', false)}
        backgroundColor={select<LoaderVariants>(
          'Farbe',
          Object.keys(theme.colors.background) as LoaderVariants[],
          'inverse'
        )}
      />
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
