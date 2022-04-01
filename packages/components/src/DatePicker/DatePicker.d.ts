import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
export interface DatePickerProps {
    id: string;
    withTime?: boolean;
    date: moment.Moment | null;
    onChange: (date: moment.Moment | null) => void;
    isOutsideRange?: (day: moment.Moment) => boolean;
    highlightToday?: boolean;
    hideReset?: boolean;
}
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
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
