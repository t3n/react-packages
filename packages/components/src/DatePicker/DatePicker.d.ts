import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
export declare const DatePicker: React.FC<{
    timePicker?: boolean;
    date: moment.Moment | null;
    onChange: (date: moment.Moment | null) => void;
}>;
