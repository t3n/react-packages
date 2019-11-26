import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { motion, PanInfo } from 'framer-motion';

import { ThemeProps } from '@t3n/theme';

export interface SliderProps {
  min?: number;
  max: number;
  step?: number;
  initialValue?: number;
  labels?: string[];
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

const StyledSliderThumb = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: translate(-50%, -50%);
  width: ${({ theme }: ThemeProps) => theme.space[3]}px;
  height: ${({ theme }: ThemeProps) => theme.space[3]}px;
  ${({ theme }) => color({ bg: 'text.highlight', theme })}
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

  const handleThumbDragStart = useCallback(() => {
    setIsDragging(true);
    document.body.style.cursor = 'pointer';
  }, []);

  const handleThumbDrag = useCallback(
    (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const nextValue = clamp(
        (Math.round(info.point.x / stepWidthRef.current) + 1) * step +
          (min - step),
        min,
        max
      );

      setValue(nextValue);
    },
    [max, min, step]
  );

  const handleThumbDragEnd = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = 'initial';
  }, []);

  return (
    <StyledSlider>
      <StyledSliderTrack ref={trackRef} />
      <motion.button
        drag="x"
        dragConstraints={trackRef}
        dragElastic={0}
        onDragStart={handleThumbDragStart}
        onDrag={handleThumbDrag}
        onDragEnd={handleThumbDragEnd}
        dragMomentum={false}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          padding: 0,
          margin: 0,
          background: 'transparent',
          border: 'none'
        }}
        animate={{
          x: isDragging ? undefined : stepWidth * ((value - min) / step),
          scale: isDragging ? 1.4 : 1
        }}
      >
        <StyledSliderThumb />
      </motion.button>
    </StyledSlider>
  );
};
