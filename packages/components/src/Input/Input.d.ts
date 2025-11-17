import React from 'react';
import { WidthProps } from 'styled-system';
export type InputTypes = 'text' | 'email' | 'password' | 'number' | 'tel';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'>, WidthProps {
    type?: InputTypes;
    onReset?: () => void;
    isFocused?: boolean;
    value?: string;
    defaultValue?: string;
    error?: boolean;
    className?: string;
    hideReset?: boolean;
    label?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
