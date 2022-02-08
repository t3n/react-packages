import React, { useCallback, useEffect, useRef, useState } from 'react';
import { animate, motion, PanInfo, useMotionValue } from 'framer-motion';
import styled from 'styled-components';
import { color, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Text from '../Text';

export interface SliderProps {
  name: string;
  min?: number;
  max: number;
  step?: number;
  value: number;
  labels?: string[];
  onChange: (value: number) => void;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const StyledSliderTrack = styled.div`
  height: ${({ theme }: ThemeProps) => theme.space[2]}px;
  width: 100%;
  position: relative;
  ${({ theme }) => color({ bg: 'background.secondary', theme })}
`;

const StyledSliderThumb = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: translate(-50%, -50%);
  width: ${({ theme }: ThemeProps) => theme.space[5]}px;
  height: ${({ theme }: ThemeProps) => theme.space[5]}px;
  ${({ theme }) => color({ bg: 'text.highlight', theme })}
`;

interface LabelProps {
  x: number;
}

const StyledSliderLabel = styled.button<LabelProps>`
  display: block;
  position: absolute;
  bottom: 0;
  left: ${({ x }) => x}%;
  transform: translateX(-50%);
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  white-space: nowrap;
  ${({ theme }) => space({ theme, mb: 4 })}

  ${Text} {
    transition: all 0.15s ease-in-out;
  }
`;

const StyledSliderMarker = styled.button<LabelProps>`
  margin: 0;
  padding: 0;
  display: block;
  width: ${({ theme }: ThemeProps) => theme.space[4]}px;
  height: ${({ theme }: ThemeProps) => theme.space[4]}px;
  position: absolute;
  top: 50%;
  left: ${({ x }) => x}%;
  border: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  outline: none;
  ${({ theme }) => color({ bg: 'background.secondary', theme })}
`;

const StyledSlider = styled.div`
  width: 100%;
  position: relative;
`;

const StyledSliderContainer = styled.div`
  ${({ theme }) => space({ pt: 6, pb: 3, px: 2, theme })}
`;

interface SliderLabelsProps extends Pick<SliderProps, 'min' | 'max'> {
  labels: string[];
  value: number;
  onPress: (value: number) => void;
}

const SliderLabels = ({
  labels,
  value,
  min = 0,
  max,
  onPress,
}: SliderLabelsProps) => (
  <>
    {labels.map((label, i) => {
      const x = (100 / (labels.length - 1)) * i;
      const isActive = value === i * ((max - min) / (labels.length - 1)) + min;

      return (
        <React.Fragment key={label}>
          <StyledSliderMarker x={x} onClick={() => onPress(i)} />
          <StyledSliderLabel x={x} onClick={() => onPress(i)}>
            <Text
              inline
              bold
              color={isActive ? 'text.primary' : 'text.secondary'}
            >
              {label}
            </Text>
          </StyledSliderLabel>
        </React.Fragment>
      );
    })}
  </>
);

const Slider: React.FC<SliderProps> = ({
  name,
  min = 0,
  max,
  step = 1,
  value = 0,
  labels = [],
  onChange,
}) => {
  const [initialized, setInitialized] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const shouldAnimateRef = useRef(false);

  const getPointerRelativePositionX = (info: PanInfo) => {
    const trackX = trackRef.current?.getBoundingClientRect().x || 0;
    const trackWidth = trackRef.current?.getBoundingClientRect().width || 0;

    return clamp(info.point.x - trackX, 0, trackWidth);
  };

  const getPointerStepPositionX = useCallback(
    (index: number) => (index / step) * stepWidth,
    [step, stepWidth]
  );

  const x = useMotionValue(getPointerStepPositionX(value));

  const updateStepWidth = useCallback(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.getBoundingClientRect().width;
    const nextStepWidth = trackWidth / ((max - min) / step);

    if (nextStepWidth !== stepWidth) shouldAnimateRef.current = false;

    setStepWidth(nextStepWidth);
  }, [max, min, step, stepWidth]);

  useEffect(() => {
    if (!initialized) setInitialized(true);

    updateStepWidth();

    window.addEventListener('resize', updateStepWidth);
    return () => window.removeEventListener('resize', updateStepWidth);
  }, [
    getPointerStepPositionX,
    initialized,
    max,
    min,
    step,
    stepWidth,
    updateStepWidth,
    x,
  ]);

  useEffect(() => {
    if (!isDraggingRef.current) {
      const pointerX = getPointerStepPositionX(value);
      if (shouldAnimateRef.current) {
        animate(x, pointerX);
      } else {
        x.set(pointerX);
        if (stepWidth) shouldAnimateRef.current = true;
      }
    }
  }, [getPointerStepPositionX, stepWidth, value, x]);

  const handleMarkerClick = (i: number) => {
    const nextValue = i * ((max - min) / (labels.length - 1)) + min;

    onChange(nextValue);
  };

  const handleThumbDragStart = useCallback(() => {
    document.body.style.cursor = 'pointer';
    isDraggingRef.current = true;
  }, []);

  const handleThumbDrag = useCallback(
    (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const pointerX = getPointerRelativePositionX(info);

      const nextValue = clamp(
        (Math.round(pointerX / stepWidth) + 1) * step + (min - step),
        min,
        max
      );

      onChange(nextValue);
    },
    [max, min, onChange, step, stepWidth]
  );

  const handleThumbDragEnd = useCallback(() => {
    document.body.style.cursor = 'initial';
    isDraggingRef.current = false;
  }, []);

  return (
    <StyledSliderContainer>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ display: 'none' }}
        readOnly
      />
      <StyledSlider>
        <StyledSliderTrack ref={trackRef} />
        <SliderLabels
          labels={labels}
          value={value}
          min={min}
          max={max}
          onPress={handleMarkerClick}
        />
        {initialized && (
          <motion.button
            drag="x"
            dragElastic={0.01}
            dragMomentum={false}
            dragConstraints={trackRef}
            dragTransition={{
              timeConstant: 100,
              modifyTarget: () => getPointerStepPositionX(value),
            }}
            initial={false}
            onDragStart={handleThumbDragStart}
            onDrag={handleThumbDrag}
            onDragEnd={handleThumbDragEnd}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              padding: 0,
              margin: 0,
              width: 1,
              height: 1,
              background: 'transparent',
              border: 'none',
              x,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.75,
            }}
            whileDrag={{
              scale: 0.75,
            }}
          >
            <StyledSliderThumb />
          </motion.button>
        )}
      </StyledSlider>
    </StyledSliderContainer>
  );
};

export default Slider;
