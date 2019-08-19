import React, { ReactNode } from 'react';
import { MarginProps } from 'styled-system';
interface FormGroupProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
    label: string;
    labelSecondary?: string;
    labelEndContent?: ReactNode;
    required?: boolean;
    errorMessage?: string;
    children: ReactNode;
}
export declare const FormGroup: {
    ({ label, labelSecondary, labelEndContent, required, errorMessage, children, ...props }: FormGroupProps): JSX.Element;
    defaultProps: {
        my: number;
    };
};
export {};
