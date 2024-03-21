import React from 'react';
import { InputTypes } from '@t3n/components/src/Input/Input';
interface FormInputProps {
    name: string;
    label: string;
    type: InputTypes;
}
export declare const FormInput: ({ name, label, type }: FormInputProps) => React.JSX.Element;
export {};
