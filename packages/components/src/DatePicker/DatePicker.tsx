import React, { useState, useEffect, useCallback, useContext } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { createGlobalStyle, ThemeContext } from 'styled-components';
import {
  border,
  typography,
  color,
  space,
  position,
  flexbox,
} from 'styled-system';
import { ThemeProps, Theme } from '@t3n/theme';
import { Box } from '../Box';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';

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

  .CalendarDay__selected, .CalendarDay__selected:hover {
    ${({ theme }) => color({ theme, bg: 'background.highlight' })}
    ${({ theme }) => border({ theme, borderColor: 'brand.red' })}
  }
`;

const TimePicker: React.FC<{
  focus: boolean;
  defaultMinutes?: string;
  defaultHours?: string;
  date: moment.Moment | null;
  onChange: (date: moment.Moment | null) => void;
  onFocusChange: (focus: boolean) => void;
  onMinutesChange: (minutes: string) => void;
  onHoursChange: (hours: string) => void;
}> = ({
  focus,
  date,
  defaultMinutes,
  defaultHours,
  onChange,
  onFocusChange,
  onMinutesChange,
  onHoursChange,
}) => {
  const [hours, setHours] = useState(defaultHours || '');
  const [minutes, setMinutes] = useState(defaultMinutes || '');

  useEffect(() => {
    onHoursChange(hours);
  }, [hours, onHoursChange]);

  useEffect(() => {
    onMinutesChange(minutes);
  }, [minutes, onMinutesChange]);

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
          onChange(
            date
              ? date.set({
                  h: parseInt(hours, 10),
                  m: parseInt(minutes, 10),
                })
              : null
          );
          onFocusChange(!focus);
        }}
      >
        <Text mt={0} mb={2} bold>
          Uhrzeit wählen
        </Text>
        <Grid mb={3}>
          <GridItem width={[1, 1, 2 / 3]}>
            <Grid>
              <GridItem width="64px" mr={1}>
                <Input
                  name="hour"
                  value={hours}
                  type="text"
                  placeholder="hh"
                  onChange={(e) =>
                    e.currentTarget.value.match(/\b(^$|[0-9]|1[0-9]|2[0-3])\b/)
                      ? setHours(e.currentTarget.value)
                      : !e.currentTarget.value
                      ? setHours('')
                      : null
                  }
                  maxLength={2}
                  autoComplete="off"
                  hideReset
                />
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="auto"
                px={0}
              >
                <Text my={0}>:</Text>
              </GridItem>
              <GridItem width="64px" mx={1}>
                <Input
                  name="minute"
                  value={minutes}
                  type="text"
                  placeholder="mm"
                  onChange={(e) =>
                    e.currentTarget.value.match(/\b(^$|[0-9]|[12345][0-9])\b/)
                      ? setMinutes(e.currentTarget.value)
                      : !e.currentTarget.value
                      ? setMinutes('')
                      : null
                  }
                  maxLength={2}
                  autoComplete="off"
                  hideReset
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
  timePicker?: boolean;
  date: moment.Moment | null;
  onChange: (date: moment.Moment | null) => void;
}> = ({ id, timePicker = false, date, onChange }) => {
  const [focus, setFocus] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const theme: Theme = useContext(ThemeContext);
  const fontSize = window
    .getComputedStyle(window.document.body)
    .getPropertyValue('font-size');
  const mobileBreakpoint =
    parseInt(theme.breakpoints[1], 10) * parseInt(fontSize, 10);

  const setMobileOnSmallScreen = useCallback(() => {
    if (window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [mobileBreakpoint]);

  useEffect(() => {
    setMobileOnSmallScreen();
    window.addEventListener('resize', setMobileOnSmallScreen);
  }, [setMobileOnSmallScreen]);

  return (
    <>
      <SingleDatePickerGlobalStyles />
      <SingleDatePicker
        readOnly={mobile}
        withFullScreenPortal={mobile}
        orientation={mobile ? 'vertical' : 'horizontal'}
        keepOpenOnDateSelect={!!timePicker}
        numberOfMonths={mobile ? 1 : 2}
        placeholder="Datum wählen"
        displayFormat={timePicker ? 'DD.MM.YYYY, HH:mm [Uhr]' : 'DD.MM.YYYY'}
        renderCalendarInfo={
          timePicker
            ? () => {
                return (
                  <TimePicker
                    focus={focus}
                    date={date}
                    defaultHours={hours}
                    defaultMinutes={minutes}
                    onFocusChange={(focusState) => setFocus(focusState)}
                    onMinutesChange={(timeMinutes) => setMinutes(timeMinutes)}
                    onHoursChange={(timeHours) => setHours(timeHours)}
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
                  h: parseInt(hours, 10),
                  m: parseInt(minutes, 10),
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
