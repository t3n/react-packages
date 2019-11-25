import React from 'react';
import { MarginProps } from 'styled-system';
import { ThemeTextColor } from '@t3n/theme/src/theme/colors/colors';
import { SliderTrackProps } from './SliderElements';
export declare type VariantType = 'light' | 'dark';
export interface SliderProps extends MarginProps {
    initialValue: number;
    minValue: number;
    maxValue: number;
    highlightColor?: ThemeTextColor & string;
    labels?: Array<string>;
    tracks?: Array<SliderTrackProps>;
    steps?: number;
    name: string;
    onChange?: (value: number) => void;
}
export interface HiddenInputProps {
    name: string;
    value: any;
    onChange?: (value: number) => void;
}
export declare const Slider: React.FC<SliderProps>;
