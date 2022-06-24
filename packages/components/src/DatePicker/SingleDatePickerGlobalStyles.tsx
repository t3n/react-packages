import { createGlobalStyle } from 'styled-components';
import {
  border,
  color,
  flexbox,
  position,
  space,
  typography,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { DatePickerProps } from './DatePicker';

const SingleDatePickerGlobalStyles = createGlobalStyle<
  Pick<DatePickerProps, 'highlightToday'> & ThemeProps
>`
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

  .SingleDatePickerInput__showClearDate,
  .SingleDatePickerInput_clearDate {
    ${({ theme }) => space({ theme, pr: 'unset' })}
  }

  .SingleDatePickerInput_clearDate:focus,
  .SingleDatePickerInput_clearDate:hover {
    ${({ theme }) => color({ theme, bg: 'transparent' })}
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

  .CalendarDay__today {
    ${({ theme, highlightToday }) =>
      color({
        theme,
        bg: highlightToday ? 'background.secondary' : 'background.primary',
      })}
  }

  .CalendarDay__blocked_out_of_range, .CalendarDay__blocked_out_of_range:active, .CalendarDay__blocked_out_of_range:hover {
    ${({ theme }) => border({ theme, color: 'shades.grey204' })}

  }
`;

export default SingleDatePickerGlobalStyles;
