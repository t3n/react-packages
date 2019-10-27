import React from 'react';
import { WidthProps } from 'styled-system';
export declare type InputTypes = 'text' | 'email' | 'password';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'>, WidthProps {
    type?: InputTypes;
    onReset?: () => void;
    isFocused: boolean;
    defaultValue?: string;
    error?: boolean;
    className?: string;
}
export declare const Input: {
    ({ disabled, type, error, width, className, onFocus, onBlur, onChange, onReset, isFocused, defaultValue, ...props }: InputProps): JSX.Element;
    defaultProps: {
        type: string;
        isFocused: boolean;
        width: string;
    };
};
