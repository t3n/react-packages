import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { typography } from 'styled-system';

export interface SliderMarkerProps {
  label: string;
  showLabel: boolean;
  value: number;
}

const fontSize = ({ theme }: ThemeProps) =>
  typography({ fontSize: theme });

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
  transform: translateX(-6px);
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
  transform: translateX(-${({ theme }: ThemeProps) => theme.space[3]/2+'px'});
  white-space: nowrap;
  background-color: ${props => props.color ? props.color : ({ theme }: ThemeProps) => theme.colors.brand.red};
`;

const StyledSliderLabelList = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: ${({ theme }: ThemeProps) => (theme.space[3] + theme.space[4])+'px'};
`;

const StyledSliderLabel = styled.span`
  position: absolute;
  display: inline-block;
  text-align: center;
  transform: translateX(-50%);
  white-space:nowrap;
  color: ${({ theme }: ThemeProps) => theme.colors.shades.grey232};
  font-weight: bold;
  ${fontSize};
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
  const position = calculatePercentagePosition(marker.length, indexOfMarker) + '%';
  return <StyledSliderPointer color={highlightColor} style={{left: position}} />;
}

export const SliderMarker = props => {
  const {marker } = props;

  return (
    <StyledSliderMarkerList>
      {marker.map((mark:SliderMarkerProps, index:number) => {
        const position = calculatePercentagePosition(marker.length, index) + '%';
        return (
          <StyledSliderMarker data-value={mark.value} key={index} style={{left: position}} />
        );
      })}
    </StyledSliderMarkerList>
  );
}

export const SliderLabels = props => {
  const { marker } = props;
  const labels = _.find(marker, { 'showLabel': true });

  if (!labels) {
    return null;
  }

  return (
    <StyledSliderLabelList>
      {marker.map((mark:SliderMarkerProps, index:number) => {
        const positionValue = calculatePercentagePosition(marker.length, index);
        const position = positionValue === 100 ? `calc(${positionValue}% - 6px)` : positionValue+'%';
        return (
          <StyledSliderLabel key={index} style={{left: position}}>{mark.label}</StyledSliderLabel>
        );
      })}
    </StyledSliderLabelList>
  );
}
