import React, { useRef } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { useDrag, useDrop, DragSourceMonitor } from 'react-dnd';
import { ThemeProps } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { typography } from 'styled-system';

export interface SliderTrackProps {
  label: string;
  showLabel: boolean;
  value: number;
  position?: number;
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
  changeSliderValue?: (value: number) => void;
}

export interface SliderMarkerProps {
  value: number;
  position?: number;
  key?: number;
  changeSliderValue?: (value: number) => void;
}

export interface SliderPointerPreviewProps {
  highlightColor?: ThemeColors & string;
}
export interface SliderPointerProps extends SliderPointerPreviewProps {
  marker?: Array<SliderTrackProps>;
  value: number;
  onValueChange?: (value: number) => void;
}

const fontSize = ({ theme }: ThemeProps) => typography({ fontSize: theme });

const fontColor = ({ highlight, theme }: SliderLabelProps & ThemeProps) => `
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
  z-index: 5;
  cursor: pointer;
  background-color: ${({ theme }: ThemeProps) => theme.colors.shades.grey232};
`;

const StyledSliderPointer = styled.span<{ color?: ThemeColors & string }>`
  position: absolute;
  bottom: 0;
  width: ${({ theme }: ThemeProps) => `${theme.space[3]}px`};
  height: ${({ theme }: ThemeProps) => `${theme.space[3]}px`};
  border-radius: 50%;
  white-space: nowrap;
  background-color: ${props =>
    props.color
      ? props.color
      : ({ theme }: ThemeProps) => theme.colors.brand.red};
  cursor: pointer;
  transition-property: left;
  transition-duration: 0.2s;
  z-index: 10;
`;

const StyledSliderPointerPreview = styled.span<{
  color?: ThemeColors & string;
}>`
  position: absolute;
  width: ${({ theme }: ThemeProps) => `${theme.space[3]}px`};
  height: ${({ theme }: ThemeProps) => `${theme.space[3]}px`};
  border-radius: 50%;
  opacity: 0.7;
  background-color: ${props =>
    props.color
      ? props.color
      : ({ theme }: ThemeProps) => theme.colors.brand.red};
`;

const StyledSliderLabelList = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: ${({ theme }: ThemeProps) =>
    `${theme.space[3] + theme.space[4]}px`};
`;

const StyledSliderLabel = styled.span<SliderLabelProps>`
  position: absolute;
  display: inline-block;
  text-align: center;
  transform: translateX(-50%);
  white-space: nowrap;
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
};

export const SliderPointer = (props: SliderPointerProps) => {
  const ref = useRef(null);
  const { highlightColor, marker, value, onValueChange } = props;
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'pointer', value, onValueChange },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  drag(ref);

  const indexOfMarker = _.findIndex(marker, { value });
  const amountOfItems = marker ? marker.length : 0;
  const position = `${calculatePercentagePosition(
    amountOfItems,
    indexOfMarker
  )}%`;
  return (
    <StyledSliderPointer
      ref={ref}
      color={highlightColor}
      style={{ left: position }}
      tabindex="-1"
    />
  );
};

export const SliderPointerPreview = (props: SliderPointerPreviewProps) => {
  const { highlightColor } = props;
  return <StyledSliderPointerPreview color={highlightColor} />;
};

export const SliderMarkerList = (props: SliderMarkerListProps) => {
  const { marker, changeSliderValue } = props;

  if (!marker) {
    return null;
  }

  return (
    <StyledSliderMarkerList>
      {marker.map((mark: SliderTrackProps, index: number) => {
        const position = calculatePercentagePosition(marker.length, index);
        return (
          <SliderMarker
            key={index}
            position={position}
            value={mark.value}
            changeSliderValue={changeSliderValue}
          />
        );
      })}
    </StyledSliderMarkerList>
  );
};

export const SliderMarker = (props: SliderMarkerProps) => {
  const { value, position, changeSliderValue } = props;
  const ref = useRef(null);
  const [canDrop, drop] = useDrop({
    accept: 'pointer',
    drop(item) {
      item.onValueChange(value);
    },
    collect: monitor => monitor.canDrop()
  });
  drop(ref);

  const style: React.CSSProperties = {
    transform: `scale(${canDrop ? 1.2 : 1})`,
    left: `${position}%`
  };

  const handleClick = () => {
    if (changeSliderValue) {
      changeSliderValue(value);
    }
  };

  return (
    <StyledSliderMarker
      ref={ref}
      data-value={value}
      style={style}
      onClick={handleClick}
    />
  );
};

export const SliderLabels = (props: SliderLabelsProps) => {
  const { marker, value } = props;
  const labels = _.find(marker, { showLabel: true });

  if (!labels || !marker) {
    return null;
  }

  return (
    <StyledSliderLabelList>
      {marker.map((mark: SliderTrackProps, index: number) => {
        const position = `${calculatePercentagePosition(
          marker.length,
          index
        )}%`;
        return (
          <StyledSliderLabel
            key={index}
            style={{ left: position }}
            highlight={mark.value === value}
          >
            {mark.label}
          </StyledSliderLabel>
        );
      })}
    </StyledSliderLabelList>
  );
};
