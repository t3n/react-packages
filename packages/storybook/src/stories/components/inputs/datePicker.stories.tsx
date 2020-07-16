import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { DatePicker, Section, Box } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/DatePicker',
  component: DatePicker,
  decorators: [withKnobs, storyContainerDecorator],
};

export const DefaultStory = () => {
  const [date, setDate] = useState<moment.Moment | null>(null);

  return (
    <Section>
      <Box width={1 / 2}>
        <DatePicker date={date} onChange={(newDate) => setDate(newDate)} />
      </Box>
    </Section>
  );
};

DefaultStory.story = {
  name: 'Default',
};

export const TimePickerStory = () => {
  const [date, setDate] = useState<moment.Moment | null>(null);

  return (
    <Section>
      <Box width={1 / 2}>
        <DatePicker
          timePicker
          date={date}
          onChange={(newDate) => setDate(newDate)}
        />
      </Box>
    </Section>
  );
};

TimePickerStory.story = {
  name: 'mit Timepicker',
};
