import React, { useRef } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { typography } from 'styled-system';

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
}

const fontSize = ({ theme }: ThemeProps) =>
  typography({ fontSize: theme });

const fontColor = ({
  highlight,
  theme
}: SliderLabelProps & ThemeProps) => `
  color: ${highlight ? theme.colors.brand.black : theme.colors.shades.grey232};
`;

const StyledSliderMarkerList = styled.div`
  position: absolute;
  width: 100%;
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
  width: ${({ theme }: ThemeProps) => theme.space[3] + 'px'};
  height: ${({ theme }: ThemeProps) => theme.space[3] + 'px'};
  border-radius: 50%;
  transform: translateX(-${({ theme }: ThemeProps) => theme.space[3] / 2 + 'px'});
  white-space: nowrap;
  background-color: ${props => props.color ? props.color : ({ theme }: ThemeProps) => theme.colors.brand.red};
  cursor: pointer;
  pointer-events: none;
`;

const StyledSliderLabelList = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: ${({ theme }: ThemeProps) => (theme.space[3] + theme.space[4]) + 'px'};
`;

const StyledSliderLabel = styled.span<SliderLabelProps>`
  position: absolute;
  display: inline-block;
  text-align: center;
  transform: translateX(-50%);
  white-space:nowrap;
  font-weight: bold;
  ${fontColor};
  ${fontSize};
`;

const calculatePercentagePosition = (amount: number, position: number) => {
  if (position === 0) {
    return 0;
  }

  if (position === amount - 1) {
    return 100;
  }

  const distance = 100 / (amount - 1);
  return position * distance;
}

export const SliderPointer = (props: SliderPointerProps) => {
  const ref = useRef(null);
  const { highlightColor, marker, value } = props;
  const indexOfMarker = _.findIndex(marker, { 'value': value });
  const amountOfItems = marker ? marker.length : 0;
  const position = calculatePercentagePosition(amountOfItems, indexOfMarker) + '%';
  return (
    <StyledSliderPointer
      ref={ref}
      color={highlightColor}
      style={{ left: position }}
      tabindex="0"
      role="slider"
      aria-valuenow={value}
    />
  );
}

export const SliderMarkerList = (props: SliderMarkerListProps) => {
  const { marker } = props;

  if (!marker) {
    return null;
  }

  return (
    <StyledSliderMarkerList>
      {marker.map((mark: SliderTrackProps, index: number) => {
        const position = calculatePercentagePosition(marker.length, index);
        return (
          <SliderMarker key={index} position={position} value={mark.value} />
        );
      })}
    </StyledSliderMarkerList>
  );
}

export const SliderMarker = (props: SliderMarkerProps) => {
  const { value, position } = props;
  const ref = useRef(null);

  return (
    <StyledSliderMarker ref={ref} data-value={value} style={{ left: position + '%' }} />
  );
}

export const SliderLabels = (props: SliderLabelsProps) => {
  const { marker, value } = props;
  const labels = _.find(marker, { 'showLabel': true });

  if (!labels || !marker) {
    return null;
  }

  return (
    <StyledSliderLabelList>
      {marker.map((mark: SliderTrackProps, index: number) => {
        const position = calculatePercentagePosition(marker.length, index) + '%';
        return (
          <StyledSliderLabel key={index} style={{ left: position }} highlight={mark.value === value}>{mark.label}</StyledSliderLabel>
        );
      })}
    </StyledSliderLabelList>
  );
}
