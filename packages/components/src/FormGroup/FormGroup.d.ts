import React, { ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export interface FormGroupProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
    label: string;
    labelSecondary?: string;
    labelEndContent?: ReactNode;
    errorMessage?: string;
}
declare const FormGroup: React.FC<FormGroupProps>;
export default FormGroup;
