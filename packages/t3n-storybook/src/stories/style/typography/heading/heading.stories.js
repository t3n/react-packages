import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, Text } from '@t3n/components';
import StoryContainer from '../../../../components/StoryContainer';

const headings = new Array(6).fill('').map((_, i) => 'h' + (i + 1));

storiesOf('Style|Typography', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addWithJSX(
    'Heading',
    () => (
      <>
        {headings.map(h => (
          <div key={h}>
            <Text my={0}>{h.toUpperCase()}</Text>
            <Heading is={h} mt={0}>
              Private Cloud: Worauf du achten solltest, wenn du dich auf
              Anbietersuche begibst
            </Heading>
          </div>
        ))}
      </>
    ),
    { skip: 1 }
  );
