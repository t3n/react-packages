import React from 'react';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { SliderProps } from './SliderElements';
export interface SliderDragLayerProps {
    highlightColor?: ThemeColors & string;
    slider?: SliderProps;
}
declare const SliderDragLayer: React.FC<SliderDragLayerProps>;
export default SliderDragLayer;
