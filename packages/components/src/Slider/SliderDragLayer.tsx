import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';
import { SliderPointerPreview } from './SliderElements';

export interface SliderDragLayerProps {
  highlightColor?: ThemeColors & string;
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
  currentOffset: XYCoord | null
) => {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x } = currentOffset;
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

  const renderItem = () => {
    switch (itemType) {
      case 'pointer':
        return <SliderPointerPreview highlightColor={props.highlightColor} />;
      default:
        return null;
    }
  };

  return !isDragging ? null : (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};
export default SliderDragLayer;
