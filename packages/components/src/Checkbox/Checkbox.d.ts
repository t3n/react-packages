import React from 'react';
import { ColorProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
interface StyledCheckboxProps extends ColorProps {
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    feedbackColor?: ThemeFeedbackColor;
}
export interface CheckboxProps extends StyledCheckboxProps {
    name: string;
    checked: boolean;
}
export declare const Checkbox: ({ checked, onChange, label, disabled, feedbackColor, name }: CheckboxProps) => JSX.Element;
export {};
