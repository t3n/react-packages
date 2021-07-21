import React, { useState } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Grid, GridItem, Section, Switch } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  decorators: [storyContainerDecorator],
};

export const DefaultStory = () => {
  const [checked, setChecked] = useState(false);

  const disabled = boolean('disable', false);
  const name = text('Name', 'Name switch-element');
  const label = text('Label', 'Label placeholder');
  const switchVariant = select('Variante Switch', ['light', 'dark'], 'light');

  return (
    <Section variant={switchVariant === 'light' ? 'primary' : 'inverse'}>
      <Switch
        disabled={disabled}
        checked={checked}
        value="true"
        name={name}
        onChange={() => {
          setChecked(!checked);
        }}
        label={label}
        variant={switchVariant}
      />
    </Section>
  );
};

DefaultStory.story = {
  name: 'Default',
};

export const ReadOnlyStory = () => {
  return (
    <>
      <Section variant="primary">
        <Grid>
          <GridItem mb={3}>
            <Switch
              disabled={false}
              checked={false}
              value="true"
              name="Read-Only "
              readOnly
              label="Switch read only"
              variant="light"
            />
          </GridItem>
          <GridItem>
            <Switch
              disabled={false}
              checked
              value="true"
              name="Read-Only "
              readOnly
              label="Switch read only checked"
              variant="light"
            />
          </GridItem>
        </Grid>
      </Section>
      <Section variant="inverse">
        <Grid>
          <GridItem mb={3}>
            <Switch
              disabled={false}
              checked={false}
              value="true"
              name="Read-Only "
              readOnly
              label="Switch read only"
              variant="dark"
            />
          </GridItem>
          <GridItem>
            <Switch
              disabled={false}
              checked
              value="true"
              name="Read-Only "
              readOnly
              label="Switch read only checked"
              variant="dark"
            />
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

ReadOnlyStory.story = {
  name: 'Read Only',
};
