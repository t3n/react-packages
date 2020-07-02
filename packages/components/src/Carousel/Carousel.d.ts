import React from 'react';
import { ResponsiveObject } from 'react-slick';
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
export declare const Carousel: React.FC<CarouselProps>;
