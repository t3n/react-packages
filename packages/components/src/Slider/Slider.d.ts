import React from 'react';
import { MarginProps } from 'styled-system';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
export declare type VariantType = 'light' | 'dark';
export interface SliderProps extends MarginProps {
    initialValue: number;
    minValue: number;
    maxValue: number;
    highlightColor?: ThemeColors & string;
    labels?: Array<string>;
    tracks?: Array<SliderMarkerProps>;
    steps?: number;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface SliderMarkerProps {
    label: string;
    showLabel: boolean;
    value: number;
}
export declare const Slider: React.FC<SliderProps>;
