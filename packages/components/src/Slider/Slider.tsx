import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { useSpring, animated } from 'react-spring';

import { ThemeProps } from '@t3n/theme';

export interface SliderProps {
  min?: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const StyledSliderTrack = styled.div`
  height: 4px;
  width: 100%;
  position: relative;
  ${({ theme }) => color({ bg: 'background.secondary', theme })}
`;

interface SliderThumbProps {
  isDragging: boolean;
}

const StyledSliderThumbInner = styled.button<SliderThumbProps>`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: translate(-50%, -50%)
    scale(${({ isDragging }) => (isDragging ? 1.4 : 1)});
  width: ${({ theme }: ThemeProps) => theme.space[3]}px;
  height: ${({ theme }: ThemeProps) => theme.space[3]}px;
  ${({ theme }) => color({ bg: 'text.highlight', theme })}
`;

const StyledSliderThumb = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 0;
`;

const StyledSlider = styled.div`
  width: 100%;
  position: relative;
`;

export const Slider = ({
  min = 1,
  max,
  step = 1,
  initialValue = 1,
  onChange
}: SliderProps) => {
  const [value, setValue] = useState(min > initialValue ? min : initialValue);
  const valueRef = useRef(value);

  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(isDragging);

  const [stepWidth, setStepWidth] = useState(0);
  const stepWidthRef = useRef(stepWidth);

  const [trackWidth, setTrackWidth] = useState(0);
  const [trackPositionX, setTrackPositionX] = useState(0);
  const trackWidthRef = useRef(trackWidth);
  const trackPositionXRef = useRef(trackPositionX);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTrackPositionAndDimensions = () => {
      if (!trackRef.current) return;

      trackWidthRef.current = trackRef.current.getBoundingClientRect().width;
      trackPositionXRef.current = trackRef.current.getBoundingClientRect().left;

      setTrackWidth(trackWidthRef.current);
      setTrackPositionX(trackWidthRef.current);
    };
    updateTrackPositionAndDimensions();

    window.addEventListener('resize', updateTrackPositionAndDimensions);

    return () =>
      window.removeEventListener('resize', updateTrackPositionAndDimensions);
  }, []);

  useEffect(() => {
    stepWidthRef.current = trackWidthRef.current / ((max - min) / step);
    setStepWidth(stepWidthRef.current);
  }, [max, min, step, trackWidth]);

  useEffect(() => {
    console.log('Value: ', value);

    if (onChange) onChange(value);
  }, [value, onChange]);

  const handleThumbDrag = useCallback(
    (e: PointerEvent) => {
      if (!e.isPrimary || !trackRef.current || !isDraggingRef.current) return;

      document.body.style.cursor = 'pointer';

      const { clientX } = e;

      const nextValue = clamp(
        (Math.round(
          (clientX - trackPositionXRef.current) / stepWidthRef.current
        ) +
          1) *
          step +
          (min - step),
        min,
        max
      );

      if (nextValue !== valueRef.current) {
        valueRef.current = nextValue;

        setValue(valueRef.current);
      }
    },
    [max, min, step]
  );

  const handleThumbDragEnd = useCallback((e: PointerEvent) => {
    if (!e.isPrimary || !trackRef.current || !isDraggingRef.current) return;

    document.body.style.cursor = 'initial';

    isDraggingRef.current = false;

    setIsDragging(isDraggingRef.current);
  }, []);

  const handleThumbDragStart = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!e.isPrimary || !trackRef.current || isDraggingRef.current) return;

      isDraggingRef.current = true;

      setIsDragging(isDraggingRef.current);
    },
    []
  );

  useEffect(() => {
    window.addEventListener('pointermove', handleThumbDrag);
    window.addEventListener('pointerup', handleThumbDragEnd);

    return () => {
      window.removeEventListener('pointermove', handleThumbDrag);
      window.removeEventListener('pointerup', handleThumbDragEnd);
    };
  }, [handleThumbDrag, handleThumbDragEnd]);

  return (
    <StyledSlider>
      <StyledSliderTrack ref={trackRef} />
      <StyledSliderThumb
        style={{
          transform: `translateX(${stepWidthRef.current *
            ((value - min) / step)}px)`
        }}
      >
        <StyledSliderThumbInner
          onPointerDown={handleThumbDragStart}
          isDragging={isDragging}
        />
      </StyledSliderThumb>
    </StyledSlider>
  );
};
