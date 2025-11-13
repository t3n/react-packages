export interface SliderProps {
    name: string;
    min?: number;
    max: number;
    step?: number;
    value: number;
    labels?: string[];
    onChange: (value: number) => void;
}
declare const Slider: ({ name, min, max, step, value, labels, onChange, }: SliderProps) => import("react/jsx-runtime").JSX.Element;
export default Slider;
