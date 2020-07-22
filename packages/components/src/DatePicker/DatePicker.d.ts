import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
export declare const TimePicker: React.FC<{
    focus: boolean;
    minutes: string;
    hours: string;
    date: moment.Moment | null;
    onChange: (date: moment.Moment | null) => void;
    onFocusChange: (focus: boolean) => void;
    onMinutesChange: (minutes: string) => void;
    onHoursChange: (hours: string) => void;
}>;
export declare const DatePicker: React.FC<{
    id: string;
    timePicker?: boolean;
    date: moment.Moment | null;
    onChange: (date: moment.Moment | null) => void;
}>;
