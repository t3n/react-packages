import { LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export interface FormGroupProps extends LabelHTMLAttributes<HTMLLabelElement>, Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'>, PropsWithChildren {
    label: string;
    labelSecondary?: string;
    labelEndContent?: ReactNode;
    errorMessage?: string;
}
declare const FormGroup: ({ label, labelSecondary, labelEndContent, errorMessage, children, my, ...props }: FormGroupProps) => import("react/jsx-runtime").JSX.Element;
export default FormGroup;
