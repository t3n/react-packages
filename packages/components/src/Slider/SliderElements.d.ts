/// <reference types="react" />
import { ThemeProps } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
export interface SliderTrackProps {
    label: string;
    showLabel: boolean;
    value: number;
    position: number;
}
export interface SliderLabelsProps {
    marker?: Array<SliderTrackProps>;
    value: number;
}
export interface SliderLabelProps extends ThemeProps {
    highlight: boolean;
}
export interface SliderMarkerListProps {
    marker?: Array<SliderTrackProps>;
}
export interface SliderMarkerProps {
    value: number;
    position?: number;
    key?: number;
}
export interface SliderPointerProps {
    marker?: Array<SliderTrackProps>;
    value: number;
    highlightColor?: ThemeColors & string;
    onChange?: Function;
}
export declare const SliderPointer: (props: SliderPointerProps) => JSX.Element;
export declare const SliderMarkerList: (props: SliderMarkerListProps) => JSX.Element | null;
export declare const SliderMarker: (props: SliderMarkerProps) => JSX.Element;
export declare const SliderLabels: (props: SliderLabelsProps) => JSX.Element | null;
