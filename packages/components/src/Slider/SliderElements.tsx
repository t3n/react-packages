import React, { useRef } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import {
  useDrag,
  useDrop,
  DragSourceMonitor,
  DragObjectWithType
} from 'react-dnd';
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

export interface DimensionsProps {
  width: number;
  height?: number;
  offsetX: number;
  offsetY?: number;
}

export interface DragItemProps extends DragObjectWithType {
  indexOfMarker: number;
  value: number;
  onValueChange: (value: number) => void;
}

export interface SliderProps {
  dimensions: DimensionsProps;
}

export interface SliderMarkerListProps {
  marker?: Array<SliderTrackProps>;
  changeSliderValue?: (value: number) => void;
  slider?: SliderProps;
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
  height: 2rem;
  bottom: -1rem;
`;

const StyledSliderMarker = styled.span`
  display: inline-block;
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin: 0.125rem 0;
  bottom: 1rem;
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
  z-index: 10;
`;

const StyledSliderPointerPreview = styled.span<{
  color?: ThemeColors & string;
}>`
  position: absolute;
  width: ${({ theme }: ThemeProps) => `${theme.space[3]}px`};
  height: ${({ theme }: ThemeProps) => `${theme.space[3]}px`};
  border-radius: 50%;
  opacity: 0.5;
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
  padding-left: 0.75rem;
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
  const indexOfMarker = _.findIndex(marker, { value });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'pointer',
      value,
      indexOfMarker,
      onValueChange,
      highlightColor
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  drag(ref);

  const amountOfItems = marker ? marker.length : 0;
  const position = `${calculatePercentagePosition(
    amountOfItems,
    indexOfMarker
  )}%`;

  return (
    <StyledSliderPointer
      color={highlightColor}
      ref={ref}
      style={{ left: position }}
    />
  );
};

export const SliderPointerPreview = (props: SliderPointerPreviewProps) => {
  const { highlightColor } = props;
  return <StyledSliderPointerPreview color={highlightColor} />;
};

const snapPositionToClosestMarker = (
  x: number,
  amountOfMarker: number,
  offsetWidth: number
) => {
  const gridWidth = offsetWidth / amountOfMarker;
  const gridPositions = [];
  for (let index = 0; index <= amountOfMarker; index += 1) {
    gridPositions.push(index * gridWidth);
  }
  const closestXPositionOnGrid = gridPositions.reduce((previous, current) =>
    Math.abs(current - x) < Math.abs(previous - x) ? current : previous
  );

  return gridPositions.indexOf(closestXPositionOnGrid);
};

const getClosestMarker = (
  marker: Array<SliderTrackProps>,
  width: number,
  deltaX: number,
  indexOfLastMarker: number
) => {
  const amountOfMarker = marker ? marker.length : 0;
  const positionOfLastMarker = calculatePercentagePosition(
    amountOfMarker,
    indexOfLastMarker
  );
  const xPositionOfLastMarker = Math.round(width * positionOfLastMarker) / 100;
  const xPositionOfPointer = deltaX + xPositionOfLastMarker;

  // snap position of pointer to closest marker
  const closestMarkerIndex = snapPositionToClosestMarker(
    xPositionOfPointer,
    amountOfMarker - 1,
    width
  );

  return marker[closestMarkerIndex];
};

export const SliderMarkerList = (props: SliderMarkerListProps) => {
  const ref = useRef(null);
  const { marker, changeSliderValue, slider } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [canDrop, drop] = useDrop({
    accept: 'pointer',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };
      const dragElement = item as DragItemProps;
      if (marker && slider) {
        const { dimensions } = slider;
        const closestMarker = getClosestMarker(
          marker,
          dimensions.width,
          delta.x,
          dragElement.indexOfMarker
        );

        if (dragElement) {
          dragElement.onValueChange(closestMarker.value);
        }
      }
    },
    collect: monitor => monitor.canDrop()
  });
  drop(ref);

  return !marker ? null : (
    <StyledSliderMarkerList ref={ref}>
      {marker.map((mark: SliderTrackProps, index: number) => {
        const position = calculatePercentagePosition(marker.length, index);
        return (
          <SliderMarker
            key={mark.value}
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

  const handleClick = () => {
    if (changeSliderValue) {
      changeSliderValue(value);
    }
  };

  const style: React.CSSProperties = {
    left: `${position}%`
  };

  return (
    <StyledSliderMarker
      style={style}
      data-value={value}
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
            key={mark.value}
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
