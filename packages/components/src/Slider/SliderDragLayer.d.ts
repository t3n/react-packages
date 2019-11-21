import React from 'react';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
export interface SliderDragLayerProps {
    highlightColor?: ThemeColors & string;
}
export declare const snapToMarker: (x: number, amountOfMarker: number, offsetWidth: number) => number;
declare const SliderDragLayer: React.FC<SliderDragLayerProps>;
export default SliderDragLayer;
