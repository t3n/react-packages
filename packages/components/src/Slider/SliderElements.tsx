import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';

export interface SliderTrackProps {
  label: string;
  showLabel: boolean;
  value: number;
}

const StyledSliderMarkerList = styled.div`
  position: absolute;
  width: 100%;
  cursor: pointer;
  pointer-events: none;
`;

const StyledSliderMarker = styled.span`
  display: inline-block;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 2px 0;
  bottom: 0;
  white-space: nowrap;
  background-color: ${({ theme }: ThemeProps) => theme.colors.shades.grey232};
`;

const StyledSliderPointer = styled.span<{ color?: (ThemeColors & string) }>`
  position: absolute;
  bottom: 0;
  width: ${({ theme }: ThemeProps) => theme.space[3]+'px'};
  height: ${({ theme }: ThemeProps) => theme.space[3]+'px'};
  border-radius: 50%;
  white-space: nowrap;
  background-color: ${props => props.color ? props.color : ({ theme }: ThemeProps) => theme.colors.brand.red};
`;

const StyledSliderLabelList = styled.span`
  position: relative;
  width: 100%;
`;

const StyledSliderLabel = styled.span`
  display: inline-block;
  position: absolute;
`;

const calculatePercentagePosition = (amount: number, position: number) => {
  if (position === 0) {
    return 0;
  }

  if (position === amount - 1) {
    return 100;
  }

  const distance = 100 / (amount -1);
  return position * distance;
}

export const SliderPointer = props => {
  const { highlightColor, marker, value } = props;
  const indexOfMarker = _.findIndex(marker, { 'value': value });
  const positionValue = calculatePercentagePosition(marker.length, indexOfMarker);
  const position = positionValue === 100 ? `calc(${positionValue}% - 8px)` : positionValue+'%';
  return <StyledSliderPointer color={highlightColor} style={{left: position}} />;
}

export const SliderMarker = props => {
  const {marker } = props;

  return (
    <StyledSliderMarkerList>
      {marker.map((mark:number, index:number) => {
        const positionValue = calculatePercentagePosition(marker.length, index);
        const position = positionValue === 100 ? `calc(${positionValue}% - 6px)` : positionValue+'%';
        return (
          <StyledSliderMarker data-value={mark.value} key={index} style={{left: position}} />
        );
      })}
    </StyledSliderMarkerList>
  );
}

export const SliderLabels = props => {
  const {marker } = props;

  return (
    <StyledSliderLabelList/>
  );
}
