import { OptionsType } from 'react-select';
import { WidthProps } from 'styled-system';
export interface SelectBoxProps<S> extends WidthProps {
    autoFocus?: boolean;
    closeMenuOnSelect?: boolean;
    defaultValue?: OptionsType<S>;
    disabled?: boolean;
    error?: boolean;
    hideReset?: boolean;
    id?: string;
    inputValue?: string;
    loading?: boolean;
    multiSelect?: boolean;
    name?: string;
    noOptionsMessage?: string;
    options: OptionsType<S>;
    placeholder?: string;
    searchable?: boolean;
    creatable?: boolean;
    tabIndex?: string;
    value?: OptionsType<S>;
    onBlur?: () => void;
    onChange?: (value: OptionsType<S>) => void;
    onFocus?: () => void;
    onKeyDown?: () => void;
    onToggleOpen?: () => void;
}
declare const SelectBox: {
    <S>({ error, noOptionsMessage, creatable, onChange, disabled, loading, hideReset, multiSelect, searchable, ...props }: SelectBoxProps<S>): JSX.Element;
    defaultProps: {
        placeholder: string;
        noOptionsMessage: string;
        loading: boolean;
        searchable: boolean;
    };
};
export { SelectBox };
