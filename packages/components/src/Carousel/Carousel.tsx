import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-default
import { default as SlickSlider } from 'react-slick';
import { space } from 'styled-system';

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
`;

const StyledPrevButton = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 95px;
`;

const NextButton: React.FC<{
  onClick?: () => void;
  hasMore: boolean;
  onClose?: () => void;
}> = ({ onClick, hasMore, onClose }) => (
  <>
    {hasMore ? (
      <StyledNextButton onClick={onClick}>Nächste</StyledNextButton>
    ) : (
      <StyledNextButton onClick={onClose}>Schließen</StyledNextButton>
    )}
  </>
);

const PrevButton: React.FC<{
  onClick?: () => void;
  showBackButton: boolean;
}> = ({ onClick, showBackButton }) => (
  <>
    {showBackButton ? (
      <StyledPrevButton onClick={onClick} variant="secondary">
        Zurück
      </StyledPrevButton>
    ) : null}
  </>
);

export interface CarouselProps {
  slidesAmount: number;
  onClose?: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  slidesAmount,
  onClose,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box>
      <StyledSlider
        dots
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={
          <NextButton
            hasMore={currentIndex < slidesAmount - 1}
            onClose={onClose}
          />
        }
        prevArrow={<PrevButton showBackButton={currentIndex > 0} />}
        beforeChange={(prev, next) => setCurrentIndex(next)}
      >
        {children}
      </StyledSlider>
    </Box>
  );
};
