import React from 'react';
import { ColorProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
declare type VariantType = 'light' | 'dark';
export interface VariantProps {
    variant?: VariantType;
}
export interface StyledCheckboxProps extends ColorProps, VariantProps {
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    feedbackColor?: ThemeFeedbackColor;
}
export interface CheckboxProps extends StyledCheckboxProps {
    name: string;
    checked: boolean;
    value: any;
}
export declare const Checkbox: ({ checked, onChange, label, disabled, feedbackColor, name, value, variant: variantProp }: CheckboxProps) => JSX.Element;
export {};
