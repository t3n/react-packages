import React from 'react';
export interface SliderProps {
    name: string;
    min?: number;
    max: number;
    step?: number;
    value: number;
    labels?: string[];
    onChange: (value: number) => void;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
