import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { SliderPointerPreview, SliderProps } from './SliderElements';

export interface SliderDragLayerProps {
  slider?: SliderProps;
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
  const {
    itemType,
    item,
    isDragging,
    initialOffset,
    currentOffset
  } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));
  const { slider } = props;
  const color = item ? item.highlightColor : '';

  let dimensions = null;
  if (slider) {
    dimensions = slider.dimensions;
  }

  return !isDragging || dimensions === null ? null : (
    <div style={layerStyles}>
      <div
        style={getItemStyles(
          initialOffset,
          currentOffset,
          dimensions.offsetX,
          dimensions.offsetX + dimensions.width
        )}
      >
        {itemType === 'pointer' ? (
          <SliderPointerPreview highlightColor={color} />
        ) : null}
      </div>
    </div>
  );
};
export default SliderDragLayer;
