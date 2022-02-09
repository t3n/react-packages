import React from 'react';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
export declare type VariantType = 'light' | 'dark';
export interface RadioButtonProps {
    name: string;
    value: any;
    checked: boolean;
    label?: string;
    disabled?: boolean;
    variant?: VariantType;
    feedbackColor?: ThemeFeedbackColor;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const RadioButton: {
    ({ checked, onChange, label, disabled, feedbackColor, name, value, variant: variantProp, }: RadioButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default RadioButton;
