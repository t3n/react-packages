import { ReactNode } from 'react';
import { MarginTopProps, MarginBottomProps } from 'styled-system';
import { InputProps } from '../Input/Input';
interface BaseInputGroupProps extends InputProps, MarginTopProps, MarginBottomProps {
    label: string;
    labelSecondary?: string;
    labelEndContent?: ReactNode;
}
interface InputGroupProps extends Omit<BaseInputGroupProps, 'labelSecondary' | 'labelEndContent'> {
    required?: boolean;
}
declare const InputGroup: {
    ({ type, required, ...props }: InputGroupProps): JSX.Element;
    defaultProps: {
        marginTop: number;
        marginBottom: number;
    };
};
export default InputGroup;
