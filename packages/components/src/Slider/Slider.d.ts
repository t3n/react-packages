/// <reference types="react" />
export interface SliderProps {
    name: string;
    min?: number;
    max: number;
    step?: number;
    initialValue?: number;
    labels?: string[];
    onChange?: (value: number) => void;
}
export declare const Slider: ({ name, min, max, step, initialValue, labels, onChange }: SliderProps) => JSX.Element;
