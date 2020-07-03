import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-default
import { default as SlickSlider, ResponsiveObject } from 'react-slick';
import { space, display } from 'styled-system';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

const StyledSlider = styled(SlickSlider)`
  > .slick-dots {
    bottom: 10px;
    width: unset;
    left: 50%;
    transform: translateX(-50%);
  }

  > .slick-dots > li {
    ${({ theme }) =>
      space({
        theme,
        m: [0, 0, 0, '0 1px'],
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
  width: 95px;
  ${({ theme }) => display({ theme, display: ['none', 'block'] })}
`;

const StyledPrevButton = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 95px;
  ${({ theme }) => display({ theme, display: ['none', 'block'] })}
`;

const NextButton: React.FC<{
  onClick?: () => void;
  nextArrowLabel: string;
  nextArrowFunction?: () => void;
  nextArrowFunctionLabel: string;
}> = ({ onClick, nextArrowLabel, nextArrowFunction, nextArrowFunctionLabel }) =>
  nextArrowFunction ? (
    <StyledNextButton onClick={nextArrowFunction}>
      {nextArrowFunctionLabel}
    </StyledNextButton>
  ) : (
    <StyledNextButton onClick={onClick}>{nextArrowLabel}</StyledNextButton>
  );

const PrevButton: React.FC<{
  onClick?: () => void;
  prevArrowLabel: string;
}> = ({ onClick, prevArrowLabel }) => (
  <StyledPrevButton onClick={onClick} variant="secondary">
    {prevArrowLabel}
  </StyledPrevButton>
);

export interface CarouselProps {
  slidesAmount: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: ResponsiveObject[];
  speed?: number;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  prevArrowLabel?: string;
  nextArrowLabel?: string;
  nextArrowFunction?: () => void;
  nextArrowFunctionLabel?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  slidesAmount,
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive,
  speed = 500,
  infinite = false,
  autoplay = false,
  autoplaySpeed = 2000,
  prevArrowLabel = 'Zurück',
  nextArrowLabel = 'Nächste',
  nextArrowFunction,
  nextArrowFunctionLabel = 'Schließen',
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          currentIndex < slidesAmount - 1 || infinite ? (
            <NextButton
              nextArrowLabel={nextArrowLabel}
              nextArrowFunction={nextArrowFunction}
              nextArrowFunctionLabel={nextArrowFunctionLabel}
            />
          ) : undefined
        }
        prevArrow={
          currentIndex > 0 || infinite ? (
            <PrevButton prevArrowLabel={prevArrowLabel} />
          ) : undefined
        }
        beforeChange={(prev, next) => setCurrentIndex(next)}
        responsive={responsive}
      >
        {children}
      </StyledSlider>
    </Box>
  );
};
