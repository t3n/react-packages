import React from 'react';
import { MarginProps } from 'styled-system';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { SliderTrackProps } from './SliderElements';
export declare type VariantType = 'light' | 'dark';
export interface SliderProps extends MarginProps {
    initialValue: number;
    minValue: number;
    maxValue: number;
    highlightColor?: ThemeColors & string;
    labels?: Array<string>;
    tracks?: Array<SliderTrackProps>;
    steps?: number;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface HiddenInputProps {
    name: string;
    value: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Slider: React.FC<SliderProps>;
