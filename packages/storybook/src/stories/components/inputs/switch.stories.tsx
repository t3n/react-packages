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
  const sectionVariant = select('Section', ['primary', 'inverse'], 'primary');

  return (
    <Section variant={sectionVariant}>
      <Switch
        disabled={disabled}
        checked={checked}
        value="true"
        name={name}
        onChange={() => {
          setChecked(!checked);
        }}
        label={label}
        colorScheme={sectionVariant === 'primary' ? 'light' : 'dark'}
      />
    </Section>
  );
};

export const simple = () => <SwitchComponent />;
