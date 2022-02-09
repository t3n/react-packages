import React from 'react';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
declare type VariantType = 'light' | 'dark';
export interface CheckboxProps {
    name: string;
    value: any;
    checked: boolean;
    label?: string;
    disabled?: boolean;
    variant?: VariantType;
    feedbackColor?: ThemeFeedbackColor;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: ({ checked, onChange, label, disabled, feedbackColor, name, value, variant, }: CheckboxProps) => JSX.Element;
export default Checkbox;
