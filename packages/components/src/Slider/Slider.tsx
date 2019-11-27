import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import { motion, PanInfo } from 'framer-motion';

import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text';

export interface SliderProps {
  name: string;
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
  onPress
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

export const Slider = ({
  name,
  min = 0,
  max,
  step = 1,
  initialValue = 0,
  labels = [],
  onChange
}: SliderProps) => {
  const [value, setValue] = useState(min > initialValue ? min : initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);

  const stepWidthRef = useRef(stepWidth);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onChange) onChange(value);
  }, [onChange, value]);

  useEffect(() => {
    const updateStepWidth = () => {
      if (!trackRef.current) return;

      const trackWidth = trackRef.current.getBoundingClientRect().width;

      stepWidthRef.current = trackWidth / ((max - min) / step);
      setStepWidth(stepWidthRef.current);
    };
    updateStepWidth();

    window.addEventListener('resize', updateStepWidth);
    return () => window.removeEventListener('resize', updateStepWidth);
  }, [max, min, step]);

  const handleMarkerClick = (i: number) => {
    setValue(i * ((max - min) / (labels.length - 1)) + min);
  };

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
        <motion.button
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          onTapStart={() => setIsTouched(true)}
          onTap={() => setIsTouched(false)}
          onTapCancel={() => setIsTouched(false)}
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
            scale: isTouched ? 0.75 : 1
          }}
        >
          <StyledSliderThumb />
        </motion.button>
      </StyledSlider>
    </StyledSliderContainer>
  );
};
