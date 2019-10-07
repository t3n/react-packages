import React from 'react';
import { ColorProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
interface StyledCheckboxProps extends ColorProps {
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    feedbackColor?: ThemeFeedbackColor;
    colorScheme: 'light' | 'dark';
}
export interface CheckboxProps extends StyledCheckboxProps {
    name: string;
    checked: boolean;
    value: any;
}
export declare const Checkbox: ({ checked, onChange, label, disabled, feedbackColor, name, value, colorScheme }: CheckboxProps) => JSX.Element;
export {};
