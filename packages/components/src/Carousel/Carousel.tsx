import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-default
import { default as SlickSlider, ResponsiveObject } from 'react-slick';
import { space, display, layout } from 'styled-system';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

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

const NextButton: React.FC<{
  onClick?: () => void;
  show: boolean;
  label: string;
  customOnClick?: () => void;
}> = ({ onClick, show, label, customOnClick }) => (
  <>
    {show ? (
      <StyledNextButton onClick={customOnClick || onClick}>
        {label}
      </StyledNextButton>
    ) : null}
  </>
);

const PrevButton: React.FC<{
  onClick?: () => void;
  show: boolean;
  label: string;
  customOnClick?: () => void;
}> = ({ onClick, show, label, customOnClick }) => (
  <>
    {show ? (
      <StyledPrevButton onClick={customOnClick || onClick} variant="secondary">
        {label}
      </StyledPrevButton>
    ) : null}
  </>
);

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
}

export const Carousel: React.FC<CarouselProps> = ({
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
  hideNextButton = false,
  hidePrevButton = false,
  onChange,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesAmount = React.Children.count(children);

  useEffect(() => {
    if (onChange) {
      onChange(currentIndex);
    }
  }, [currentIndex, onChange]);

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
        nextArrow={
          <NextButton
            show={
              (!hideNextButton && currentIndex < slidesAmount - 1) ||
              infinite ||
              !!onNextClick
            }
            label={nextLabel}
            customOnClick={onNextClick}
          />
        }
        prevArrow={
          <PrevButton
            show={
              (!hidePrevButton && currentIndex > 0) || infinite || !!onPrevClick
            }
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
