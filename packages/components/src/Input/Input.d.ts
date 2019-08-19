import React from 'react';
import { WidthProps } from 'styled-system';
export declare type InputTypes = 'text' | 'email' | 'password';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width'>, WidthProps {
    type?: InputTypes;
    value?: string;
    defaultValue?: string;
    error?: boolean;
    fixedPlaceholder?: string;
    className?: string;
}
export declare const Input: {
    ({ type, value, defaultValue, disabled, error, fixedPlaceholder, width, className, onChange, onFocus, onBlur, ...props }: InputProps): JSX.Element;
    defaultProps: {
        type: string;
        width: string;
    };
};
