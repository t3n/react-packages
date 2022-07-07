import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
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
    onChange: (startDate: moment.Moment | null, endDate: moment.Moment | null) => void;
    isOutsideRange?: (day: moment.Moment) => boolean;
}
export declare type DatePickerProps = SingleDatePickerProps | DateRangePickerProps;
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
