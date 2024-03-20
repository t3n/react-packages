/* eslint-disable import/prefer-default-export */
import 'react-dates/initialize';

import React, { useState } from 'react';
import {
  DateRangePicker,
  FocusedInputShape,
  SingleDatePicker,
} from 'react-dates';
import moment from 'moment';

import Box from '../Box';
import Button from '../Button';
import Grid from '../Grid';
import GridItem from '../GridItem';
import useIsMobile from '../hooks/useIsMobile';
import Input from '../Input';
import Text from '../Text';
import DateRangePickerGlobalStyles from './DateRangePickerGlobalStyles';
import SingleDatePickerGlobalStyles from './SingleDatePickerGlobalStyles';

export interface BaseDatePickerProps {
  highlightToday?: boolean;
  hideReset?: boolean;
}
export interface SingleDatePickerProps extends BaseDatePickerProps {
  isDateRange?: false;
  id: string;
  withTime?: boolean;
  date: moment.Moment | null;
  onChange: (date: moment.Moment | null) => void;
  isOutsideRange?: (day: moment.Moment) => boolean;
}

export interface DateRangePickerProps extends BaseDatePickerProps {
  isDateRange: true;
  startDateId: string;
  endDateId: string;
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  onChange: (
    startDate: moment.Moment | null,
    endDate: moment.Moment | null,
  ) => void;
  isOutsideRange?: (day: moment.Moment) => boolean;
}

export type DatePickerProps = SingleDatePickerProps | DateRangePickerProps;

export interface TimePickerProps {
  focus: boolean;
  date: moment.Moment | null;
  onChange: (date: moment.Moment | null) => void;
  onFocusChange: (focus: boolean) => void;
}

export interface TimeInputProps {
  name: string;
  value: string | undefined;
  placeholder: string;
  showValue: boolean;
  onChange: (value: string) => void;
}

moment.locale('de');
moment.updateLocale('de', {
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  weekdaysMin: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
});

const TimeInput: React.FC<TimeInputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  showValue,
}) => (
  <Input
    name={name}
    value={showValue ? value : ''}
    type="text"
    placeholder={placeholder}
    onChange={(e) => onChange(e.currentTarget.value)}
    autoComplete="off"
    hideReset
  />
);

const TimePicker: React.FC<TimePickerProps> = ({
  focus,
  date,
  onFocusChange,
  onChange,
}) => {
  const getParsedValue = (value?: string) => {
    if (!value) {
      return '';
    }

    return value.length > 1 ? value : `0${value}`;
  };

  const parsedHours = getParsedValue(date ? date.get('hours').toString() : '');
  const parsedMinutes = getParsedValue(
    date ? date.get('minutes').toString() : '',
  );

  const showTime = !!(date && (date.get('minutes') || date.get('hours')));

  return (
    <Box
      p={['13px', '13px', 4]}
      pt={0}
      width={['300px', '300px', 'auto']}
      mx={['auto', 'auto', 0]}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFocusChange(!focus);
        }}
      >
        <Text mt={0} mb={2} bold>
          Uhrzeit
        </Text>
        <Grid mb={3}>
          <GridItem width={[1, 1, 2 / 3]}>
            <Grid>
              <GridItem width="64px" mr={1}>
                <TimeInput
                  name="hours"
                  placeholder="hh"
                  value={parsedHours}
                  showValue={showTime}
                  onChange={(value) => {
                    const parsedValue =
                      // eslint-disable-next-line no-nested-ternary
                      value.length > 2 && value[0] === '0'
                        ? value.substring(1, 3)
                        : value.length > 2
                          ? value.substring(0, 2)
                          : value;

                    onChange(
                      moment(date || moment()).set({
                        h: parsedValue.match(/\b(^$|0?[0-9]|1[0-9]|2[0-3])\b/)
                          ? parseInt(parsedValue, 10)
                          : parseInt(parsedHours, 10) || 0,
                      }),
                    );
                  }}
                />
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="auto"
                px={0}
              >
                <Text my={0} mr={1}>
                  :
                </Text>
              </GridItem>
              <GridItem width="64px" mr={1}>
                <TimeInput
                  name="minutes"
                  placeholder="mm"
                  value={parsedMinutes}
                  showValue={showTime}
                  onChange={(value) => {
                    const parsedValue =
                      // eslint-disable-next-line no-nested-ternary
                      value.length > 2 && value[0] === '0'
                        ? value.substring(1, 3)
                        : value.length > 2
                          ? value.substring(0, 2)
                          : value;

                    onChange(
                      moment(date || moment()).set({
                        m: parsedValue.match(
                          /\b(^$|0?[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])\b/,
                        )
                          ? parseInt(parsedValue, 10)
                          : parseInt(parsedMinutes, 10) || 0,
                      }),
                    );
                  }}
                />
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                width="auto"
                px={0}
              >
                <Text my={0}>Uhr</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            width={[1, 1, 1 / 3]}
            display="flex"
            justifyContent="flex-end"
          >
            <Button mt={[2, 2, 0]} width={[1, 1, 'auto']} type="submit">
              Datum festlegen
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

const checkIsDateRangePicker = (
  props: DatePickerProps,
): props is DateRangePickerProps => {
  return !!props.isDateRange;
};

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [focus, setFocus] = useState(false);
  const [focusInput, setFocusInput] = useState<FocusedInputShape | null>(null);
  const isMobile = useIsMobile();
  const falseFunc = () => false;

  if (checkIsDateRangePicker(props)) {
    const {
      startDate,
      endDate,
      startDateId,
      endDateId,
      hideReset,
      highlightToday,
      onChange,
      isOutsideRange,
    } = props;

    return (
      <>
        <DateRangePickerGlobalStyles highlightToday={highlightToday} />
        <DateRangePicker
          readOnly={isMobile}
          withFullScreenPortal={isMobile}
          isOutsideRange={isOutsideRange || falseFunc}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          numberOfMonths={isMobile ? 1 : 2}
          startDatePlaceholderText="Startdatum"
          endDatePlaceholderText="Enddatum"
          displayFormat="DD.MM.YYYY"
          startDate={startDate}
          endDate={endDate}
          onDatesChange={({ startDate: newStartDate, endDate: newEndDate }) => {
            onChange(
              newStartDate
                ? newStartDate.set({
                    h: startDate?.get('hours') || 0,
                    m: startDate?.get('minutes') || 0,
                  })
                : null,
              newEndDate
                ? newEndDate.set({
                    h: endDate?.get('hours') || 0,
                    m: endDate?.get('minutes') || 0,
                  })
                : null,
            );
          }}
          focusedInput={focusInput}
          onFocusChange={setFocusInput}
          showClearDates={!hideReset}
          startDateId={startDateId}
          endDateId={endDateId}
        />
      </>
    );
  }

  const {
    date,
    withTime,
    id,
    hideReset,
    highlightToday,
    onChange,
    isOutsideRange,
  } = props;

  return (
    <>
      <SingleDatePickerGlobalStyles highlightToday={highlightToday} />
      <SingleDatePicker
        readOnly={isMobile}
        withFullScreenPortal={isMobile}
        isOutsideRange={isOutsideRange || falseFunc}
        orientation={isMobile ? 'vertical' : 'horizontal'}
        keepOpenOnDateSelect={!!withTime}
        numberOfMonths={isMobile ? 1 : 2}
        placeholder="Datum wählen"
        monthFormat="MMMM YYYY"
        displayFormat={
          withTime &&
          (date?.get('hours').toString() !== '0' ||
            date?.get('minutes').toString() !== '0')
            ? 'DD.MM.YYYY, HH:mm [Uhr]'
            : 'DD.MM.YYYY'
        }
        renderCalendarInfo={
          withTime
            ? () => {
                return (
                  <TimePicker
                    focus={focus}
                    date={date}
                    onFocusChange={(focusState) => setFocus(focusState)}
                    onChange={onChange}
                  />
                );
              }
            : () => ''
        }
        date={date}
        onDateChange={(newDate) =>
          onChange(
            newDate
              ? newDate.set({
                  h: date?.get('hours') || 0,
                  m: date?.get('minutes') || 0,
                })
              : null,
          )
        }
        focused={focus}
        onFocusChange={() => setFocus(!focus)}
        showClearDate={!hideReset}
        id={id}
      />
    </>
  );
};

export default DatePicker;
