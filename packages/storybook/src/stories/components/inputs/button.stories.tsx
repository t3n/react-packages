import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import { Button, Grid, GridItem, Section, H3 } from '@t3n/components';
import { MaterialCheck } from '@t3n/icons';
import StoryContainer from '../../../components/StoryContainer';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
};

export const defaultStory = () => {
  const loading = boolean('Ladend', false);
  const disabled = boolean('Disabled', false);
  const variant = select(
    'Variante',
    { primary: 'primary', secondary: 'secondary' },
    'primary'
  );
  const size = select(
    'Größe',
    { small: 'small', regular: 'regular', big: 'big' },
    'regular'
  );

  return (
    <StoryContainer>
      <Button
        disabled={disabled}
        size={size}
        variant={variant}
        loading={loading}
      >
        Button
      </Button>
    </StoryContainer>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const variants = () => (
  <>
    <Section variant="primary">
      <H3>Primäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button size="small">Klick mich</Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="regular">Klick mich</Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="big">Klick mich</Button>
        </GridItem>
      </Grid>
      <H3>Sekundäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button variant="secondary" size="small">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button variant="secondary" size="regular">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button variant="secondary" size="big">
            Klick mich
          </Button>
        </GridItem>
      </Grid>
    </Section>
    <Section variant="secondary">
      <H3>Primäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button size="small">Klick mich</Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="regular">Klick mich</Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="big">Klick mich</Button>
        </GridItem>
      </Grid>
      <H3>Sekundäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button variant="secondary" size="small">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button variant="secondary" size="regular">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button variant="secondary" size="big">
            Klick mich
          </Button>
        </GridItem>
      </Grid>
    </Section>
    <Section variant="inverse">
      <H3>Primäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button color="inverse" size="small">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="inverse" size="regular">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="inverse" size="big">
            Klick mich
          </Button>
        </GridItem>
      </Grid>
      <H3>Sekundäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button color="inverse" variant="secondary" size="small">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="inverse" variant="secondary" size="regular">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="inverse" variant="secondary" size="big">
            Klick mich
          </Button>
        </GridItem>
      </Grid>
    </Section>
    <Section variant="highlight">
      <H3>Primäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button color="highlight" size="small">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="highlight" size="regular">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="highlight" size="big">
            Klick mich
          </Button>
        </GridItem>
      </Grid>
      <H3>Sekundäre Buttons</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <Button color="highlight" variant="secondary" size="small">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="highlight" variant="secondary" size="regular">
            Klick mich
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="highlight" variant="secondary" size="big">
            Klick mich
          </Button>
        </GridItem>
      </Grid>
    </Section>
  </>
);

variants.story = {
  name: 'Alle Varianten',
};

export const loading = () => (
  <>
    <Section variant="primary">
      <Button loading>Klick mich</Button>
      <Button variant="secondary" loading ml={3}>
        Klick mich
      </Button>
    </Section>
    <Section variant="secondary">
      <Button loading>Klick mich</Button>
      <Button variant="secondary" loading ml={3}>
        Klick mich
      </Button>
    </Section>
    <Section variant="inverse">
      <Button color="inverse" loading>
        Klick mich
      </Button>
      <Button variant="secondary" color="inverse" loading ml={3}>
        Klick mich
      </Button>
    </Section>
    <Section variant="highlight">
      <Button color="highlight" loading>
        Klick mich
      </Button>
      <Button variant="secondary" color="highlight" loading ml={3}>
        Klick mich
      </Button>
    </Section>
  </>
);

loading.story = {
  name: 'Ladend',
};

export const disabled = () => (
  <>
    <Section variant="primary">
      <Button disabled>Klick mich</Button>
      <Button variant="secondary" disabled ml={3}>
        Klick mich
      </Button>
      <Button disabled loading ml={3}>
        Klick mich
      </Button>
    </Section>
    <Section variant="secondary">
      <Button variant="secondary" disabled>
        Klick mich
      </Button>
      <Button variant="secondary" disabled ml={3}>
        Klick mich
      </Button>
      <Button variant="secondary" disabled loading ml={3}>
        Klick mich
      </Button>
    </Section>
    <Section variant="inverse">
      <Button color="inverse" disabled>
        Klick mich
      </Button>
      <Button variant="secondary" color="inverse" disabled ml={3}>
        Klick mich
      </Button>
      <Button color="inverse" loading disabled ml={3}>
        Klick mich
      </Button>
    </Section>
    <Section variant="highlight">
      <Button color="highlight" disabled>
        Klick mich
      </Button>
      <Button variant="secondary" color="highlight" disabled ml={3}>
        Klick mich
      </Button>
      <Button color="highlight" loading disabled ml={3}>
        Klick mich
      </Button>
    </Section>
  </>
);

disabled.story = {
  name: 'Disabled status',
};

export const icon = () => (
  <>
    <Section variant="primary">
      <Grid mb={2}>
        <GridItem width={1 / 3}>
          <Button size="small" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="regular" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="big" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem width={1 / 3}>
          <Button size="small" variant="secondary" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="regular" variant="secondary" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="big" variant="secondary" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
    </Section>

    <Section variant="secondary">
      <Grid mb={2}>
        <GridItem width={1 / 3}>
          <Button size="small" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="regular" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="big" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem width={1 / 3}>
          <Button size="small" variant="secondary" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="regular" variant="secondary" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button size="big" variant="secondary" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
    </Section>

    <Section variant="inverse">
      <Grid mb={2}>
        <GridItem width={1 / 3}>
          <Button color="inverse" size="small" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="inverse" size="regular" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="inverse" size="big" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem width={1 / 3}>
          <Button
            color="inverse"
            size="small"
            variant="secondary"
            iconLeft={MaterialCheck}
          >
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button
            color="inverse"
            size="regular"
            variant="secondary"
            iconLeft={MaterialCheck}
          >
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button
            color="inverse"
            size="big"
            variant="secondary"
            iconLeft={MaterialCheck}
          >
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
    </Section>

    <Section variant="highlight">
      <Grid mb={2}>
        <GridItem width={1 / 3}>
          <Button color="highlight" size="small" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="highlight" size="regular" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button color="highlight" size="big" iconLeft={MaterialCheck}>
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem width={1 / 3}>
          <Button
            color="highlight"
            size="small"
            variant="secondary"
            iconLeft={MaterialCheck}
          >
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button
            color="highlight"
            size="regular"
            variant="secondary"
            iconLeft={MaterialCheck}
          >
            Bestätigen
          </Button>
        </GridItem>
        <GridItem width={1 / 3}>
          <Button
            color="highlight"
            size="big"
            variant="secondary"
            iconLeft={MaterialCheck}
          >
            Bestätigen
          </Button>
        </GridItem>
      </Grid>
    </Section>
  </>
);
icon.story = {
  name: 'Mit Icon',
};
