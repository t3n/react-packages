/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { createGlobalStyle } from 'styled-components';
import {
  border,
  typography,
  color,
  space,
  position,
  flexbox,
} from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { Box } from '../Box';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import useIsMobile from '../hooks/useIsMobile';

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

const SingleDatePickerGlobalStyles = createGlobalStyle`
  .SingleDatePickerInput__withBorder {
    border: none;
  }

  .DateInput {
    width: 100%;
  }

  .SingleDatePickerInput, .SingleDatePicker {
    width: 100%;
  }

  .DateInput_input {
    ${({ theme }) =>
      border({
        theme,
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'shades.grey143',
      })}
    height: 40px;
    ${({ theme }) => typography({ theme, fontSize: '1rem' })}

    &::placeholder {
      ${({ theme }) => color({ theme, color: 'text.secondary' })}
    }
  }

  .DateInput_input__focused {
    ${({ theme }) => border({ theme, borderColor: 'shades.grey42' })}
  }

  .DayPicker__withBorder {
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
    ${({ theme }) =>
      border({
        theme,
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'shades.grey232',
      })}
  }

  .SingleDatePicker_picker {
    ${({ theme }) => position({ theme, top: ['0', '0', '49px !important'] })}
  }

  .DateInput_fang {
    top: 40px !important;
  }

  .DateInput_fangStroke {
    stroke: ${({ theme }: ThemeProps) => theme.colors.shades.grey232};
  }

  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    ${({ theme }) =>
      border({
        theme,
        borderRightColor: 'brand.red',
      })}
  }

  .CalendarMonth_caption {
    ${({ theme }) => color({ theme, color: 'text.primary' })}
    ${({ theme }) => typography({ theme, fontSize: 1 })}
  }

  .DayPickerNavigation_svg__horizontal {
    fill: ${({ theme }: ThemeProps) => theme.colors.shades.grey42};

    &:hover {
      fill: ${({ theme }: ThemeProps) => theme.colors.shades.white};
    }
  }

  .DayPickerNavigation_button {
    border: none;
    ${({ theme }) => border({ theme, borderRadius: [0, 0, '50%'] })}
    ${({ theme }) => color({ theme, bg: 'background.secondary' })}
    ${({ theme }) => space({ theme, p: [0, 0, 2] })}

    &:hover {
      ${({ theme }) => color({ theme, bg: 'background.highlight' })}
      border: none;

      .DayPickerNavigation_svg__horizontal {
        fill: ${({ theme }: ThemeProps) => theme.colors.shades.white};
      }
    }
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .DayPicker_portal__vertical {
    height: 100%;
    padding-top: 16px;
  }

  .DayPickerNavigation__verticalDefault {
    display: flex;
    justify-content: center;
    height: 40px;
    position: absolute;
    top: 40px;
    ${({ theme }) => space({ theme, mx: 'auto', pb: 3 })}
  }

  .DayPicker_focusRegion {
    display: flex;
    flex-direction: column-reverse;
    ${({ theme }) =>
      flexbox({
        theme,
        flexDirection: 'column',
      })}
  }

  .DayPickerNavigation_button__verticalDefault {
    background: none;
    box-shadow: none;
    width: auto;

    ${({ theme }) => space({ theme, mx: 9 })}

    svg {
      width: 24px;
      height: auto;
      fill: ${({ theme }: ThemeProps) => theme.colors.shades.grey204};
    }

    &:hover {
      ${({ theme }) => color({ theme, bg: 'background.primary' })}
      border: none;

      svg {
        fill: ${({ theme }: ThemeProps) => theme.colors.shades.grey42};
      }
    }
  }

  .CalendarMonthGrid {
    height: 340px;
  }

  .CalendarDay__selected, .CalendarDay__selected:hover, .CalendarDay__selected:active {
    ${({ theme }) => {
      const { backgroundColor } = color({ theme, bg: 'brand.red' });
      return `background-color: ${backgroundColor} !important;`;
    }}
    ${({ theme }) => {
      const { borderColor } = border({ theme, borderColor: 'brand.red' });
      return `border-color: ${borderColor} !important;`;
    }}
  }


  .DayPicker_weekHeader {
    ${({ theme }) => color({ theme, color: 'shades.grey143' })}
  }

  .CalendarDay__default {
    ${({ theme }) => border({ theme, borderColor: 'shades.grey232' })}

    &:hover {
      ${({ theme }) => border({ theme, borderColor: 'shades.grey232' })}
      ${({ theme }) => color({ theme, bg: 'shades.grey232' })}

    }
  }


  .CalendarDay__blocked_out_of_range, .CalendarDay__blocked_out_of_range:active, .CalendarDay__blocked_out_of_range:hover {
    ${({ theme }) => border({ theme, color: 'shades.grey204' })}

  }
`;

const TimeInput: React.FC<{
  name: string;
  value: string | undefined;
  placeholder: string;
  showValue: boolean;
  onChange: (value: string) => void;
}> = ({ name, value, placeholder, onChange, showValue }) => (
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

const TimePicker: React.FC<{
  focus: boolean;
  date: moment.Moment | null;
  onChange: (date: moment.Moment | null) => void;
  onFocusChange: (focus: boolean) => void;
}> = ({ focus, date, onFocusChange, onChange }) => {
  const getParsedValue = (value?: string) => {
    if (!value) {
      return '';
    }

    return value.length > 1 ? value : `0${value}`;
  };

  const parsedHours = getParsedValue(date ? date.get('hours').toString() : '');
  const parsedMinutes = getParsedValue(
    date ? date.get('minutes').toString() : ''
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
                      })
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
                      value.length > 2 && value[0] === '0'
                        ? value.substring(1, 3)
                        : value.length > 2
                        ? value.substring(0, 2)
                        : value;

                    onChange(
                      moment(date || moment()).set({
                        m: parsedValue.match(
                          /\b(^$|0?[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])\b/
                        )
                          ? parseInt(parsedValue, 10)
                          : parseInt(parsedMinutes, 10) || 0,
                      })
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

export const DatePicker: React.FC<{
  id: string;
  withTime?: boolean;
  date: moment.Moment | null;
  onChange: (date: moment.Moment | null) => void;
  isOutsideRange?: (day: moment.Moment) => boolean;
}> = ({ id, withTime = false, date, onChange, isOutsideRange }) => {
  const [focus, setFocus] = useState(false);
  const isMobile = useIsMobile();
  const falseFunc = () => false;

  return (
    <>
      <SingleDatePickerGlobalStyles />
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
              : null
          )
        }
        focused={focus}
        onFocusChange={() => setFocus(!focus)}
        id={id}
      />
    </>
  );
};
