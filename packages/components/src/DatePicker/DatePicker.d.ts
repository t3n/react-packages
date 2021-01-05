import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
export declare const DatePicker: React.FC<{
    id: string;
    withTime?: boolean;
    date: moment.Moment | null;
    onChange: (date: moment.Moment | null) => void;
    isOutsideRange?: (day: moment.Moment) => boolean;
}>;
