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
export declare const Slider: React.FC<SliderProps>;
