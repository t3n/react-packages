import React from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
export type VariantType = 'light' | 'dark';
export interface SwitchProps extends MarginProps, WidthProps {
    label?: string;
    name: string;
    value: any;
    checked: boolean;
    disabled?: boolean;
    variant?: VariantType;
    feedbackColor?: ThemeFeedbackColor;
    readOnly?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Switch: ({ checked, readOnly, onChange, label, disabled, variant: variantProp, name, value, width: widthProp, ...marginProps }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;
