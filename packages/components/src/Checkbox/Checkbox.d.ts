import React from 'react';
import { ColorProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
interface CheckboxProps extends ColorProps {
    checked: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    feedback?: boolean;
    feedbackColor?: ThemeFeedbackColor;
}
export declare const Checkbox: ({ checked, onChange, label, disabled, feedbackColor }: CheckboxProps) => JSX.Element;
export {};
