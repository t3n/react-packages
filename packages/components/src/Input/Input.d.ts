import React from 'react';
import { WidthProps } from 'styled-system';
export declare type InputTypes = 'text' | 'email' | 'password';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'>, WidthProps {
    type?: InputTypes;
    onReset?: () => void;
    isFocused?: boolean;
    defaultValue?: string;
    error?: boolean;
    className?: string;
    hideReset?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
