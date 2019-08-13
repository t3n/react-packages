import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Avatar } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';

const options = {
  White: 'white',
  Black: 'black'
};

storiesOf('Components|Content/Avatar', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
        <Avatar
          size={text('Größe', '40')}
          src={text(
            'Image URL',
            'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
          )}
          label={text('Label', 'Test')}
          textColor={select('Textfarbe', options, 'black')}
        />
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
