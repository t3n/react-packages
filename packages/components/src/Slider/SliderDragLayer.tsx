import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { ObjectOrArray } from 'styled-system';
import { SliderPointerPreview, SliderProps } from './SliderElements';

export interface SliderDragLayerProps {
  highlightColor?: ThemeColors & string;
  slider?: ObjectOrArray<SliderProps>;
}

const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

const getItemStyles = (
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  minimumOffset: number,
  maximumOffset: number
) => {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  // prevent positions outside of slider
  let { x } = currentOffset;
  if (minimumOffset && x < minimumOffset) {
    x = minimumOffset;
  }
  if (maximumOffset && x > maximumOffset) {
    x = maximumOffset;
  }

  const transform = `translate(${x}px, ${initialOffset.y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
};

const SliderDragLayer: React.FC<SliderDragLayerProps> = props => {
  const { itemType, isDragging, initialOffset, currentOffset } = useDragLayer(
    monitor => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging()
    })
  );
  const { highlightColor, slider } = props;
  const { dimensions } = slider;
  const renderItem = () => {
    switch (itemType) {
      case 'pointer':
        return <SliderPointerPreview highlightColor={highlightColor} />;
      default:
        return null;
    }
  };

  return !isDragging ? null : (
    <div style={layerStyles}>
      <div
        style={getItemStyles(
          initialOffset,
          currentOffset,
          dimensions.offsetX,
          dimensions.offsetX + dimensions.width
        )}
      >
        {renderItem()}
      </div>
    </div>
  );
};
export default SliderDragLayer;
