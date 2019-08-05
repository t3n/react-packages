import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from '@t3n/components';

import InputReadme from '@t3n/components/src/Input/INPUT.md';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Inputs/Input', module)
  .addParameters({
    readme: {
      sidebar: InputReadme
    }
  })
  .add(
    'Simple Input',
    () => (
      <StoryContainer>
        <Input
          type="text"
          placeholder="Firstname Lastname"
          fixedPlaceholder="Name:"
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
        />
      </StoryContainer>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
