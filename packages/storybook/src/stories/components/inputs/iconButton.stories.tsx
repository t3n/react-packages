import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { Grid, GridItem, H3, IconButton, Section } from '@t3n/components';

import {
  MaterialCheck,
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff,
} from '@t3n/icons';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/IconButton',
  component: IconButton,
  decorators: [withKnobs, storyContainerDecorator],
};

type SizesType = 'big' | 'small' | 'regular';
type VariantType = 'primary' | 'secondary';
type ColorType = 'default' | 'highlight' | 'inverse';
type AsType = 'a' | 'button';

const icons = {
  MaterialCheck,
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff,
};

type IconType =
  | 'MaterialCheck'
  | 'MaterialClear'
  | 'MaterialVisibility'
  | 'MaterialVisibilityOff';

export const defaultStory = () => {
  const iconOption = select<IconType>(
    'Icon',
    Object.keys(icons) as IconType[],
    'MaterialCheck'
  );

  return (
    <IconButton
      icon={icons[iconOption]}
      label={text('Label', 'Speichern')}
      alwaysShowText={boolean('Always show text', false)}
      size={select<SizesType>('Size', ['regular', 'small', 'big'], 'regular')}
      as={select<AsType>('As', ['button', 'a'], 'button')}
      loading={boolean('Loading', false)}
      variant={select<VariantType>(
        'Variant',
        ['primary', 'secondary'],
        'primary'
      )}
      color={select<ColorType>(
        'Color',
        ['default', 'highlight', 'inverse'],
        'default'
      )}
    />
  );
};

defaultStory.story = {
  name: 'Default',
};

export const variants = () => (
  <>
    <Section variant="primary">
      <H3>Primär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton icon={MaterialCheck} label="Speichern" size="small" />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton icon={MaterialCheck} label="Speichern" size="regular" />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton icon={MaterialCheck} label="Speichern" size="big" />
        </GridItem>
      </Grid>
      <H3>Sekundär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            variant="secondary"
            size="small"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            variant="secondary"
            size="regular"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            variant="secondary"
            size="big"
          />
        </GridItem>
      </Grid>
    </Section>
    <Section variant="secondary">
      <H3>Primär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton icon={MaterialCheck} label="Speichern" size="small" />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton icon={MaterialCheck} label="Speichern" size="regular" />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton icon={MaterialCheck} label="Speichern" size="big" />
        </GridItem>
      </Grid>
      <H3>Sekundär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            variant="secondary"
            size="small"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            variant="secondary"
            size="regular"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            variant="secondary"
            size="big"
          />
        </GridItem>
      </Grid>
    </Section>
    <Section variant="inverse">
      <H3>Primär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="inverse"
            size="small"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="inverse"
            size="regular"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="inverse"
            size="big"
          />
        </GridItem>
      </Grid>
      <H3>Sekundär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="inverse"
            variant="secondary"
            size="small"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="inverse"
            variant="secondary"
            size="regular"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="inverse"
            variant="secondary"
            size="big"
          />
        </GridItem>
      </Grid>
    </Section>
    <Section variant="highlight">
      <H3>Primär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="highlight"
            size="small"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="highlight"
            size="regular"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="highlight"
            size="big"
          />
        </GridItem>
      </Grid>
      <H3>Sekundär</H3>
      <Grid>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="highlight"
            variant="secondary"
            size="small"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="highlight"
            variant="secondary"
            size="regular"
          />
        </GridItem>
        <GridItem width={1 / 3}>
          <IconButton
            icon={MaterialCheck}
            label="Speichern"
            color="highlight"
            variant="secondary"
            size="big"
          />
        </GridItem>
      </Grid>
    </Section>
  </>
);

variants.story = {
  name: 'Alle Varianten',
};

export const loadingStory = () => {
  return (
    <>
      <Section variant="primary">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="secondary">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="inverse">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="inverse"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="inverse"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="inverse"
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="inverse"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="inverse"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="inverse"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="highlight">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="highlight"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="highlight"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="highlight"
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="highlight"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="highlight"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              loading
              icon={MaterialCheck}
              label="Speichern"
              color="highlight"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

loadingStory.story = {
  name: 'Loading',
};

export const iconOnlyStory = () => {
  return (
    <>
      <Section variant="primary">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} size="small" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} size="regular" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} size="big" />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} variant="secondary" size="small" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} variant="secondary" size="big" />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="secondary">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} size="small" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} size="regular" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} size="big" />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} variant="secondary" size="small" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} variant="secondary" size="big" />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="inverse">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} color="inverse" size="small" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} color="inverse" size="regular" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} color="inverse" size="big" />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              color="inverse"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              color="inverse"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              color="inverse"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="highlight">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} color="highlight" size="small" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} color="highlight" size="regular" />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton icon={MaterialCheck} color="highlight" size="big" />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              color="highlight"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              color="highlight"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              color="highlight"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

iconOnlyStory.story = {
  name: 'Icon Only',
};

export const alwaysShowTextStory = () => {
  return (
    <>
      <Section variant="primary">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="secondary">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="inverse">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="inverse"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="inverse"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="inverse"
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="inverse"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="inverse"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="inverse"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="highlight">
        <H3>Primär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="highlight"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="highlight"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="highlight"
              size="big"
            />
          </GridItem>
        </Grid>
        <H3>Sekundär</H3>
        <Grid>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="highlight"
              variant="secondary"
              size="small"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="highlight"
              variant="secondary"
              size="regular"
            />
          </GridItem>
          <GridItem width={1 / 3}>
            <IconButton
              icon={MaterialCheck}
              label="Speichern"
              alwaysShowText
              color="highlight"
              variant="secondary"
              size="big"
            />
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

alwaysShowTextStory.story = {
  name: 'Always Show Text',
};
