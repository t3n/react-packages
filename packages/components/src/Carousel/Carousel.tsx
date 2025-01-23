import React, { ReactNode, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as SlickSlider, ResponsiveObject } from 'react-slick';
import styled from 'styled-components';
import { display, layout, space } from 'styled-system';

import {
  MaterialCheck,
  MaterialChevronLeft,
  MaterialChevronRight,
} from '@t3n/icons';

import Box from '../Box';
import Button from '../Button';
import IconButton from '../IconButton';

export interface CarouselProps {
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: ResponsiveObject[];
  speed?: number;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  nextLabel?: string;
  prevLabel?: string;
  onNextClick?: () => void;
  onPrevClick?: () => void;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: (currentIndex: number) => void;
  isIconButton?: boolean;
  children?: ReactNode;
  adaptiveHeight?: boolean;
}

const StyledSlider = styled(SlickSlider)`
  > .slick-dots {
    bottom: 10px;
    ${({ theme }) => layout({ theme, width: ['100%', 'unset'] })};
    left: 50%;
    transform: translateX(-50%);
  }

  > .slick-dots > li {
    ${({ theme }) =>
      space({
        theme,
        m: ['0 8px', 0, 0, '0 1px'],
      })};

    @media (max-width: 429px) {
      ${({ theme }) =>
        space({
          theme,
          m: ['0 4px', 0, 0, '0 1px'],
        })};
    }
  }

  > .slick-dots li button {
    height: 8px;
    width: 8px;
  }

  > .slick-dots li button:before {
    font-size: 8px;
    height: 8px;
    width: 8px;
  }
`;

const StyledNextButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ theme }) => display({ theme, display: ['none', 'block'] })}
`;

const StyledPrevButton = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  ${({ theme }) => display({ theme, display: ['none', 'block'] })}
`;

const StyledIconButtonWrapper = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  bottom: 0;
  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
  z-index: 1;
`;

const NextButton: React.FC<{
  onClick?: () => void;
  show: boolean;
  label?: string;
  customOnClick?: () => void;
  isIconButton?: boolean;
  isLastSlide?: boolean;
}> = ({
  onClick,
  show = true,
  label,
  customOnClick,
  isIconButton,
  isLastSlide,
}) => {
  if (!show) return null;

  const icon = isLastSlide ? MaterialCheck : MaterialChevronRight;

  if (isIconButton) {
    return (
      <StyledIconButtonWrapper position="right">
        <IconButton onClick={customOnClick || onClick} icon={icon} />
      </StyledIconButtonWrapper>
    );
  }

  return (
    <StyledNextButton onClick={customOnClick || onClick}>
      {label}
    </StyledNextButton>
  );
};

const PrevButton: React.FC<{
  onClick?: () => void;
  show: boolean;
  label?: string;
  customOnClick?: () => void;
  isIconButton?: boolean;
}> = ({ onClick, show = true, label, customOnClick, isIconButton }) => {
  if (!show) return null;

  if (isIconButton) {
    return (
      <StyledIconButtonWrapper position="left">
        <IconButton
          onClick={customOnClick || onClick}
          icon={MaterialChevronLeft}
        />
      </StyledIconButtonWrapper>
    );
  }

  return (
    <StyledPrevButton onClick={customOnClick || onClick} variant="secondary">
      {label}
    </StyledPrevButton>
  );
};

const Carousel: React.FC<CarouselProps> = ({
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive,
  speed = 500,
  infinite = false,
  autoplay = false,
  autoplaySpeed = 2000,
  prevLabel = 'Zurück',
  nextLabel = 'Nächste',
  onNextClick,
  onPrevClick,
  hideNextButton,
  hidePrevButton,
  isIconButton,
  onChange,
  children,
  adaptiveHeight,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesAmount = React.Children.count(children);

  useEffect(() => {
    if (onChange) {
      onChange(currentIndex);
    }
  }, [currentIndex, onChange]);
  const isLastSlide = currentIndex === slidesAmount - slidesToShow;
  return (
    <Box>
      <StyledSlider
        dots
        infinite={infinite}
        speed={speed}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        adaptiveHeight={adaptiveHeight}
        nextArrow={
          <NextButton
            show={
              hideNextButton !== undefined
                ? !hideNextButton
                : currentIndex < slidesAmount - 1 || infinite
            }
            isLastSlide={isLastSlide}
            isIconButton={isIconButton}
            label={nextLabel}
            customOnClick={onNextClick}
          />
        }
        prevArrow={
          <PrevButton
            show={
              hidePrevButton !== undefined
                ? !hidePrevButton
                : currentIndex > 0 || infinite
            }
            isIconButton={isIconButton}
            label={prevLabel}
            customOnClick={onPrevClick}
          />
        }
        beforeChange={(prev, next) => setCurrentIndex(next)}
        responsive={responsive}
      >
        {children}
      </StyledSlider>
    </Box>
  );
};

export default Carousel;
