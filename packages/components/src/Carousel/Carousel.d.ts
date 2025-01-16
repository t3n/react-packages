import React, { ReactNode } from 'react';
import { ResponsiveObject } from 'react-slick';
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
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
