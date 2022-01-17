import React, { useState } from 'react';

import { Box, DatePicker, Section } from '@t3n/components';

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
        />
      </Box>
    </Section>
  );
};

DefaultStory.storyName = 'Default';

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

TimePickerStory.storyName = 'mit Timepicker';
