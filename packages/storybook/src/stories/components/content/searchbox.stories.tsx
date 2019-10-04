import React from 'react';
import { SearchBox, PageHeader, Avatar } from '@t3n/components';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storyContainerDecorator } from '../../../utils/decorators';

export const defaultStory = () => {
  return (
    <SearchBox
      isLoading={boolean('Ladestatus', false)}
      placeholder={text(
        'Placeholder',
        'Suche nach digitialen Pionieren, News und mehr'
      )}
    />
  );
};

defaultStory.story = {
  name: 'SearchBox'
};

export default {
  component: SearchBox,
  title: 'Components|Content/SearchBox',
  decorators: [withKnobs, storyContainerDecorator]
};

export const inHeaderStoryStory = () => {
  return (
    <PageHeader>
      <SearchBox
        width={[0.3, 0.5, 0.7]}
        isLoading={boolean('Ladestatus', false)}
        placeholder={text(
          'Placeholder',
          'Suche nach digitialen Pionieren, News und mehr'
        )}
      />
      <Avatar src="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80" />
    </PageHeader>
  );
};

inHeaderStoryStory.story = {
  name: 'Im Header'
};
