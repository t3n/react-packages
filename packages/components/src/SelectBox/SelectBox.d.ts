import { type JSX } from 'react';
import { Options } from 'react-select';
import { WidthProps } from 'styled-system';
export interface SelectBoxProps<S> extends WidthProps {
    autoFocus?: boolean;
    closeMenuOnSelect?: boolean;
    defaultValue?: Options<S>;
    disabled?: boolean;
    error?: boolean;
    hideReset?: boolean;
    id?: string;
    inputValue?: string;
    loading?: boolean;
    multiSelect?: boolean;
    name?: string;
    noOptionsMessage?: string;
    options: Options<S>;
    defaultOptions?: Options<S>;
    placeholder?: string;
    searchable?: boolean;
    creatable?: boolean;
    tabIndex?: string | number;
    value?: Options<S>;
    onBlur?: () => void;
    onChange?: (value: Options<S>) => void;
    onFocus?: () => void;
    onKeyDown?: () => void;
    onToggleOpen?: () => void;
    async?: boolean;
    loadOptions?: (inputValue: string, callback: (options: Options<S>) => void) => void;
    loadingMessage?: (obj: {
        inputValue: string;
    }) => string;
    onInputChange?: (newValue: string) => string;
}
declare const SelectBox: <S>({ error, noOptionsMessage, creatable, onChange, disabled, loading, hideReset, multiSelect, searchable, placeholder, async, loadOptions, ...props }: SelectBoxProps<S>) => JSX.Element;
export default SelectBox;
