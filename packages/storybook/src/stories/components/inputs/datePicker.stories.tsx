import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import moment from 'moment';

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
          hideReset={boolean('Ohne Reset', false)}
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

export const DateRangeStory = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

  return (
    <Section>
      <Box width={[1, 1 / 2]}>
        <DatePicker
          isDateRange
          startDateId="startid"
          endDateId="endid"
          startDate={startDate}
          endDate={endDate}
          onChange={(newStartDate, newEndDate) => {
            setStartDate(newStartDate);
            setEndDate(newEndDate);
          }}
          hideReset={boolean('Ohne Reset', false)}
        />
      </Box>
    </Section>
  );
};

DateRangeStory.storyName = 'DateRange';
