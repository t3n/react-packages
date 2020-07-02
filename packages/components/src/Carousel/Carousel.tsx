import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-default
import { default as SlickSlider, ResponsiveObject } from 'react-slick';
import { space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { Button, Box } from '..';

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

  > .slick-dots li button:before {
    font-size: 20px;
  }
`;

const StyledNextButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 95px;

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    display: none;
  }
`;

const StyledPrevButton = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 95px;

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    display: none;
  }
`;

const NextButton: React.FC<{
  onClick?: () => void;
  showNextButton: boolean;
  nextArrowLabel: string;
  nextArrowFunction?: () => void;
  nextArrowFunctionLabel: string;
}> = ({
  onClick,
  showNextButton,
  nextArrowLabel,
  nextArrowFunction,
  nextArrowFunctionLabel,
}) => (
  <>
    {showNextButton ? (
      <StyledNextButton onClick={onClick}>{nextArrowLabel}</StyledNextButton>
    ) : nextArrowFunction ? (
      <StyledNextButton onClick={nextArrowFunction}>
        {nextArrowFunctionLabel}
      </StyledNextButton>
    ) : null}
  </>
);

const PrevButton: React.FC<{
  onClick?: () => void;
  showBackButton: boolean;
  prevArrowLabel: string;
}> = ({ onClick, showBackButton, prevArrowLabel }) => (
  <>
    {showBackButton ? (
      <StyledPrevButton onClick={onClick} variant="secondary">
        {prevArrowLabel}
      </StyledPrevButton>
    ) : null}
  </>
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
          <NextButton
            showNextButton={currentIndex < slidesAmount - 1 || infinite}
            nextArrowLabel={nextArrowLabel}
            nextArrowFunction={nextArrowFunction}
            nextArrowFunctionLabel={nextArrowFunctionLabel}
          />
        }
        prevArrow={
          <PrevButton
            showBackButton={currentIndex > 0 || infinite}
            prevArrowLabel={prevArrowLabel}
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
