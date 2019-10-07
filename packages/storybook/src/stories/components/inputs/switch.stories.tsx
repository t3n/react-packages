import React, { useState } from 'react';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Switch, Section } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Switch',
  component: Switch,
  decorators: [withKnobs, storyContainerContentDecorator]
};

const SwitchComponent: React.FC = () => {
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

export const simple = () => <SwitchComponent />;
