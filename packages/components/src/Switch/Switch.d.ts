import React from 'react';
import { ColorProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
declare type VariantType = 'light' | 'dark';
interface VariantProps {
    variant?: VariantType;
}
interface StyledSwitchProps extends ColorProps, VariantProps {
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    feedbackColor?: ThemeFeedbackColor;
}
export interface SwitchProps extends StyledSwitchProps {
    name: string;
    checked: boolean;
    value: any;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
