import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import { Button } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';
import buttonMD from './button.md';

storiesOf('Components|Button', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(buttonMD))
  .add('Variants', () => (
    <div>
      <Button href="http://www.google.de" onClick={() => null} target="_blank">
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
  ));
