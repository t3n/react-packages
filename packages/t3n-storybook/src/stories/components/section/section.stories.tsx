import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import SectionReadme from '@t3n/components/src/Section/SECTION.md';
import { Heading, Text, Section } from '@t3n/components';

storiesOf('Components|Layout/Section', module)
  .addParameters({
    readme: {
      sidebar: SectionReadme
    }
  })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </Section>
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
