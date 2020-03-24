import React from 'react';

import { Heading, Text } from '@t3n/components';
import { HeadingElements } from '@t3n/components/src/Heading/Heading';

import { storyContainerDecorator } from '../../../../utils/decorators';

export default {
  title: 'Components|Typografie/Heading',
  component: Heading,
  decorators: [storyContainerDecorator],
};

const headings: HeadingElements[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const sizes = () => (
  <>
    {headings.map((h) => (
      <div key={h}>
        <Text my={0}>{h.toUpperCase()}</Text>
        <Heading as={h} mt={0}>
          Private Cloud: Worauf du achten solltest, wenn du dich auf
          Anbietersuche begibst
        </Heading>
      </div>
    ))}
  </>
);

sizes.story = {
  name: 'Größen',
};
