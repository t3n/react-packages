/// <reference types="react" />
export interface SliderProps {
    name: string;
    min?: number;
    max: number;
    step?: number;
    value: number;
    labels?: string[];
    onChange: (value: number) => void;
}
export declare const Slider: ({ name, min, max, step, value, labels, onChange, }: SliderProps) => JSX.Element;
