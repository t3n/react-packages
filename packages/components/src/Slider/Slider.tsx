import React, { useState } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import { MarginProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import {
  SliderTrackProps,
  SliderMarkerList,
  SliderPointer,
  SliderLabels
} from './SliderElements';
import SliderDragLayer from './SliderDragLayer';

export type VariantType = 'light' | 'dark';

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

const StyledSlider = styled.div<SliderProps>`
  position: relative;
  display: flex;
  height: auto;
  margin: ${({ theme }: ThemeProps) => `${theme.space[4]}px`};
`;

const StyledSlide = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSliderRail = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.colors.shades.grey232};
  height: ${({ theme }: ThemeProps) => `${theme.space[1]}px`};
  bottom: ${({ theme }: ThemeProps) =>
    `${theme.space[3] / 2 - theme.space[1] / 2}px`};
`;

const HiddenInput = styled.input.attrs({ type: 'hidden' })<HiddenInputProps>`
  display: none;
`;

const generateMarkerFromSteps = (
  minValue: number,
  maxValue: number,
  steps?: number
) => {
  const marker: Array<SliderTrackProps> = [];
  let newValue = minValue;
  let index = 0;
  do {
    marker.push({
      value: newValue,
      label: '',
      showLabel: false
    });
    newValue += steps as number;
    index += 1;
  } while (newValue <= (maxValue as number));

  return marker;
};

const generateMarker = (
  minValue: number,
  maxValue: number,
  labels?: Array<string>,
  tracks?: Array<SliderTrackProps>,
  steps?: number
) => {
  const marker: Array<SliderTrackProps> = [];

  if (tracks) {
    tracks.forEach((track: SliderTrackProps) => {
      marker.push(track);
    });
  } else {
    marker.push(...generateMarkerFromSteps(minValue, maxValue, steps));
  }

  if (labels) {
    labels.forEach((label: string, index: number) => {
      if (marker[index] && label !== '') {
        marker[index].label = label;
        marker[index].showLabel = true;
      }
    });
  }

  return marker;
};

export const Slider: React.FC<SliderProps> = ({
  initialValue,
  minValue,
  maxValue,
  highlightColor,
  labels,
  tracks,
  steps,
  name,
  onChange,
  ...marginProps
}) => {
  const [value, setValue] = useState(initialValue || 0);
  const marker = generateMarker(minValue, maxValue, labels, tracks, steps);
  const changeSliderValue = (value: number) => {
    setValue(value);
  };
  const touchBackendOptions = {
    enableTouchEvents: true,
    enableMouseEvents: true,
    enableKeyboardEvents: true
  };

  return (
    <StyledSlider
      initialValue={initialValue}
      minValue={minValue}
      maxValue={maxValue}
      highlightColor={highlightColor}
      labels={labels}
      tracks={tracks}
      steps={steps}
      name={name}
      {...marginProps}
    >
      <StyledSlide>
        <HiddenInput value={value} name={name} onChange={onChange} />
        <SliderLabels marker={marker} value={value} />
        <DndProvider backend={TouchBackend} options={touchBackendOptions}>
          <SliderDragLayer highlightColor={highlightColor} />
          <StyledSliderRail />
          <SliderMarkerList
            marker={marker}
            changeSliderValue={changeSliderValue}
          />
          <SliderPointer
            highlightColor={highlightColor}
            marker={marker}
            value={value}
            onValueChange={changeSliderValue}
          />
        </DndProvider>
      </StyledSlide>
    </StyledSlider>
  );
};

Slider.defaultProps = {
  steps: 1
};
