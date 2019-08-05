import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonReadme from '@t3n/components/src/Button/BUTTON.md';
import { Button } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Inputs/Button', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addParameters({
    readme: {
      sidebar: ButtonReadme
    }
  })
  .add(
    'Variants',
    () => (
      <div>
        <Button
          href="http://www.google.de"
          onClick={() => null}
          target="_blank"
        >
          Click me
        </Button>
        <br />
        <Button
          color="dark"
          href="http://www.google.de"
          onClick={() => null}
          target="_blank"
        >
          Click me
        </Button>
        <br />
        <Button
          secondary
          href="http://www.google.de"
          onClick={() => null}
          target="_blank"
        >
          Click me
        </Button>
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
