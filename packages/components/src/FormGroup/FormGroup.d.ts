import React, { ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export interface FormGroupProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
    label: string;
    labelSecondary?: string;
    labelEndContent?: ReactNode;
    errorMessage?: string;
    children: ReactNode;
}
declare const FormGroup: {
    ({ label, labelSecondary, labelEndContent, errorMessage, children, ...props }: FormGroupProps): JSX.Element;
    defaultProps: {
        my: number;
    };
};
export default FormGroup;
