import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Heading, Text, Section } from '@t3n/components';

export default {
  title: 'Components|Layout/Section',
  component: Section,
  decorators: [withKnobs]
};

export const defaultStory = () => (
  <>
    <Section
      variant="primary"
      innerGap={number('Inner Gap', 5, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })}
    >
      <Heading mt={0}>Lorem ipsum dolor sit amet</Heading>
      <Text mb={0}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>
    </Section>
    <Section
      variant="secondary"
      innerGap={number('Inner Gap', 5, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })}
    >
      <Heading mt={0}>Lorem ipsum dolor sit amet</Heading>
      <Text mb={0}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>
    </Section>
    <Section
      variant="inverse"
      innerGap={number('Inner Gap', 5, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })}
    >
      <Heading mt={0}>Lorem ipsum dolor sit amet</Heading>
      <Text mb={0}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>
    </Section>
    <Section
      variant="highlight"
      innerGap={number('Inner Gap', 5, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })}
    >
      <Heading mt={0}>Lorem ipsum dolor sit amet</Heading>
      <Text mb={0}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>
    </Section>
  </>
);

defaultStory.story = {
  name: 'Default'
};
