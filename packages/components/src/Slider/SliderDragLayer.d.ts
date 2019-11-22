import React from 'react';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { ObjectOrArray } from 'styled-system';
import { SliderProps } from './SliderElements';
export interface SliderDragLayerProps {
    highlightColor?: ThemeColors & string;
    slider?: ObjectOrArray<SliderProps>;
}
declare const SliderDragLayer: React.FC<SliderDragLayerProps>;
export default SliderDragLayer;
