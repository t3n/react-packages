import React from 'react';
export interface CarouselProps {
    slidesAmount: number;
    onClose?: () => void;
}
export declare const Carousel: React.FC<CarouselProps>;
