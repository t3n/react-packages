import React from 'react';
import { WidthProps } from 'styled-system';
export declare type InputTypes = 'text' | 'email' | 'password';
export declare type InputStates = 'disabled' | 'invalid';
export interface InputProps extends WidthProps {
    type: InputTypes;
    value?: string;
    defaultValue?: string;
    state?: InputStates;
    placeholder?: string;
    fixedPlaceholder?: string;
    name?: string;
    id?: string;
    className?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
declare const Input: {
    ({ type, value, defaultValue, state, fixedPlaceholder, width, name, id, className, onChange, ...props }: InputProps): JSX.Element;
    defaultProps: {
        width: string;
    };
};
export default Input;
