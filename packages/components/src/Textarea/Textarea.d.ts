import React from 'react';
import { WidthProps } from 'styled-system';
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'width' | 'value'>, WidthProps {
    onReset?: () => void;
    isFocused?: boolean;
    defaultValue?: string;
    error?: boolean;
    className?: string;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement | null>>;
