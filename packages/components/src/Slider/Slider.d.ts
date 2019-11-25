/// <reference types="react" />
export interface SliderProps {
    min?: number;
    max: number;
    step?: number;
    initialValue?: number;
    onChange?: (value: number) => void;
}
export declare const Slider: ({ min, max, step, initialValue, onChange }: SliderProps) => JSX.Element;
