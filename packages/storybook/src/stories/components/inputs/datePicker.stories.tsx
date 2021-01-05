import React, { useState } from 'react';

import { Section, Box, DatePicker } from '@t3n/components';

import { boolean } from '@storybook/addon-knobs';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  decorators: [storyContainerDecorator],
};

export const DefaultStory = () => {
  const [date, setDate] = useState<moment.Moment | null>(null);

  return (
    <Section>
      <Box width={[1, 1 / 2]}>
        <DatePicker
          id="test datepicker"
          date={date}
          onChange={(newDate: moment.Moment | null) => setDate(newDate)}
          withoutPrevDates={boolean('Ohne vergangene Tage', false)}
        />
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
      <Box width={[1, 1 / 2]}>
        <DatePicker
          id="test datepicker with timepicker"
          withTime
          date={date}
          onChange={(newDate: moment.Moment | null) => setDate(newDate)}
        />
      </Box>
    </Section>
  );
};

TimePickerStory.story = {
  name: 'mit Timepicker',
};
