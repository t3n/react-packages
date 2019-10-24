import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Link, Section, Heading } from '@t3n/components';

export default {
  title: 'Components|Inputs/Link',
  component: Link,
  decorators: [withKnobs]
};

export const defaultStory = () => {
  const linkVariant = select(
    'Variante Link',
    ['primary', 'secondary', 'inverse', 'highlight'],
    'primary'
  );
  const disabled = boolean('disable', false);
  return (
    <Section variant={linkVariant}>
      <Link disabled={disabled} variant={linkVariant} href="/">
        Default
      </Link>
    </Section>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const variants = () => (
  <>
    <Section variant="primary">
      <Heading as="h3" mt={0}>
        Primary
      </Heading>
      <Link href="/">Test-Link</Link>
      <Heading as="h6" mt={4} mb={2}>
        Im Textfluss{' '}
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer <Link href="/">Test-Link</Link>{' '}
        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.{' '}
        <Link href="/">Test-Link</Link> Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
    </Section>
    <Section variant="secondary">
      <Heading as="h3" mt={0}>
        Secondary
      </Heading>
      <Link variant="secondary" href="/">
        Test-Link
      </Link>
      <Heading as="h6" mt={4} mb={2}>
        Im Textfluss{' '}
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer{' '}
        <Link variant="secondary" href="/">
          Test-Link
        </Link>{' '}
        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.{' '}
        <Link variant="secondary" href="/">
          Test-Link
        </Link>{' '}
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </Section>
    <Section variant="inverse">
      <Heading as="h3" mt={0}>
        Inverse
      </Heading>
      <Link variant="inverse" href="/">
        Test-Link
      </Link>
      <Heading as="h6" mt={4} mb={2}>
        Im Textfluss{' '}
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer{' '}
        <Link variant="inverse" href="/">
          Test-Link
        </Link>{' '}
        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.{' '}
        <Link variant="inverse" href="/">
          Test-Link
        </Link>{' '}
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </Section>
    <Section variant="highlight">
      <Heading as="h3" mt={0}>
        Highlight
      </Heading>
      <Link variant="highlight" href="/">
        Test-Link
      </Link>
      <Heading as="h6" mt={4} mb={2}>
        Im Textfluss{' '}
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer{' '}
        <Link variant="highlight" href="/">
          Test-Link
        </Link>{' '}
        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.{' '}
        <Link variant="highlight" href="/">
          Test-Link
        </Link>{' '}
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </Section>
  </>
);

variants.story = {
  name: 'Alle Varianten'
};

export const disabledStory = () => (
  <>
    <Section variant="primary">
      <Heading as="h3" mt={0}>
        Primary
      </Heading>
      <Link disabled href="/">
        Test-Link
      </Link>
    </Section>
    <Section variant="secondary">
      <Heading as="h3" mt={0}>
        Secondary
      </Heading>
      <Link disabled variant="secondary" href="/">
        Test-Link
      </Link>
    </Section>
    <Section variant="inverse">
      <Heading as="h3" mt={0}>
        Inverse
      </Heading>
      <Link disabled variant="inverse" href="/">
        Test-Link
      </Link>
    </Section>
    <Section variant="highlight">
      <Heading as="h3" mt={0}>
        Highlight
      </Heading>
      <Link disabled variant="highlight" href="/">
        Test-Link
      </Link>
    </Section>
  </>
);

disabledStory.story = {
  name: 'Disabled Status'
};
