import { OptionsType } from 'react-select';
import { WidthProps } from 'styled-system';
export interface SelectBoxProps<S> extends WidthProps {
    autoFocus?: boolean;
    defaultValue?: OptionsType<S>;
    disabled?: boolean;
    error?: boolean;
    hideReset?: boolean;
    id?: string;
    inputValue?: string;
    loading?: boolean;
    multiSelect?: boolean;
    name?: string;
    options: OptionsType<S>;
    placeholder?: string;
    searchable?: boolean;
    tabIndex?: string;
    value?: OptionsType<S>;
    onBlur?: () => void;
    onChange?: (value: OptionsType<S>) => void;
    onFocus?: () => void;
    onKeyDown?: () => void;
    onToggleOpen?: () => void;
}
declare function SelectBox<S>({ autoFocus, defaultValue, disabled, error, hideReset, id, inputValue, loading, multiSelect, name, options, placeholder, searchable, tabIndex, value, width, onBlur, onChange, onFocus, onKeyDown, onToggleOpen, }: SelectBoxProps<S>): JSX.Element;
declare namespace SelectBox {
    var defaultProps: {
        placeholder: string;
        loading: boolean;
    };
}
export { SelectBox };
