import React from 'react';
import { WidthProps } from 'styled-system';
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'width' | 'value'>, WidthProps {
    onReset?: () => void;
    isFocused?: boolean;
    defaultValue?: string;
    error?: boolean;
    className?: string;
}
declare const Textarea: ({ ref, disabled, error, width, rows, className, onFocus, onBlur, onChange, onReset, isFocused, defaultValue, maxLength, ...props }: TextareaProps & {
    ref?: React.RefObject<HTMLTextAreaElement | null>;
}) => import("react/jsx-runtime").JSX.Element;
export default Textarea;
