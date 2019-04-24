import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, Text } from '@t3n/components';
import { HeadingElements } from '@t3n/components/src/Heading/Heading';
import StoryContainer from '../../../../components/StoryContainer';

const headings: HeadingElements[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

storiesOf('Style|Typography', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add(
    'Heading',
    () => (
      <>
        {headings.map(h => (
          <div key={h}>
            <Text my={0}>{h.toUpperCase()}</Text>
            <Heading as={h} mt={0}>
              Private Cloud: Worauf du achten solltest, wenn du dich auf
              Anbietersuche begibst
            </Heading>
          </div>
        ))}
      </>
    ),
    { skip: 1 }
  );
