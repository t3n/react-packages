import { ReactNode } from 'react';
import { InputProps } from '../Input/Input';
interface BaseInputGroupProps extends InputProps {
    label: string;
    labelSecondary?: string;
    labelEndContent?: ReactNode;
}
interface InputGroupProps extends Omit<BaseInputGroupProps, 'labelSecondary' | 'labelEndContent'> {
    required?: boolean;
}
declare const InputGroup: ({ type, required, ...props }: InputGroupProps) => JSX.Element;
export default InputGroup;
