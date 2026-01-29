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
}
declare const Input: ({ ref, disabled, type, error, width, className, onFocus, onBlur, onChange, onReset, isFocused, value: controlledValue, defaultValue, hideReset, ...props }: InputProps & {
    ref?: React.RefObject<HTMLInputElement | null>;
}) => import("react/jsx-runtime").JSX.Element;
export default Input;
