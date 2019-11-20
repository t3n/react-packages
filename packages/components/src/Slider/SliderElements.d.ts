/// <reference types="react" />
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
export interface SliderTrackProps {
    label: string;
    showLabel: boolean;
    value: number;
}
export interface SliderLabelsProps {
    marker?: Array<SliderTrackProps>;
    value: number;
}
export interface SliderMarkerProps {
    marker?: Array<SliderTrackProps>;
}
export interface SliderPointerProps {
    marker?: Array<SliderTrackProps>;
    value: number;
    highlightColor?: ThemeColors & string;
}
export declare const SliderPointer: (props: SliderPointerProps) => JSX.Element;
export declare const SliderMarker: (props: SliderMarkerProps) => JSX.Element | null;
export declare const SliderLabels: (props: SliderLabelsProps) => JSX.Element | null;
