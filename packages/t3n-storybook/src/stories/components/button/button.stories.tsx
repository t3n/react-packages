import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Text } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Button', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Variants', () => (
    <div>
      <Button href="http://www.google.de" onClick={() => null} target="_blank">
        Click me
      </Button>
      <Button
        color="dark"
        href="http://www.google.de"
        onClick={() => null}
        target="_blank"
      >
        Click me
      </Button>
      <Button
        secondary
        href="http://www.google.de"
        onClick={() => null}
        target="_blank"
      >
        Click me
      </Button>
    </div>
  ));
