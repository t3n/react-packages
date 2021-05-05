/* eslint-disable no-nested-ternary */
import React from 'react';
import Select, { components, GroupTypeBase, OptionsType } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { WidthProps } from 'styled-system';
import { useDebouncedCallback } from 'use-debounce';

import { MaterialClear, MaterialExpandMore } from '@t3n/icons';
import { Theme } from '@t3n/theme';

import { DefaultTheme, useTheme } from 'styled-components';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

const getCustomStyles = (error: boolean, theme: Theme & DefaultTheme) => ({
  container: (provided: any, state: any) => ({
    ...provided,
    outline: '0',
    pointerEvents: state.isDisabled && 'all',
    '*': {
      cursor: state.isDisabled && 'not-allowed !important',
    },
  }),
  control: (provided: any, state: any) => {
    return {
      ...provided,
      color: theme.colors.text.primary,
      backgroundColor: theme.colors.background.primary,
      boxShadow: 0,
      borderRadius: theme.border.radii[1],
      borderColor: error
        ? theme.colors.feedback.error
        : state.isDisabled
        ? theme.colors.shades.grey204
        : state.isFocused
        ? theme.colors.shades.grey42
        : theme.colors.shades.grey143,
      ':hover': {
        borderColor: error
          ? theme.colors.feedback.error
          : state.isDisabled
          ? theme.colors.shades.grey204
          : state.isFocused
          ? theme.colors.shades.grey42
          : theme.colors.shades.grey143,
      },
    };
  },
  placeholder: (provided: any) => ({
    ...provided,
    opacity: '0.6',
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    margin: 0,
    backgroundColor: error
      ? theme.colors.feedback.error
      : state.isDisabled
      ? theme.colors.shades.grey204
      : state.isFocused
      ? theme.colors.shades.grey42
      : theme.colors.shades.grey143,
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: '30px',
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    ':hover': {
      background: 'inherit',
      borderRadius: 'inherit',
      cursor: 'pointer',
    },
  }),
  valueContainer: (provided: any) => ({ ...provided, cursor: 'text' }),
  clearIndicator: (provided: any) => ({ ...provided, cursor: 'pointer' }),
  dropdownIndicator: (provided: any) => ({ ...provided, cursor: 'pointer' }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isDisabled
      ? null
      : state.isSelected
      ? theme.colors.shades.grey232
      : state.isFocused
      ? theme.colors.shades.grey244
      : null,
    color: state.isDisabled ? theme.colors.shades.grey232 : null,
    cursor: state.isDisabled ? 'not-allowed' : 'default',
    ':active': {
      backgroundColor:
        !state.isDisabled &&
        (state.isSelected
          ? theme.colors.shades.grey232
          : state.isFocused
          ? theme.colors.shades.grey244
          : null),
    },
  }),
  noOptionsMessage: (provided: any) => ({ ...provided, textAlign: 'left' }),
  group: (provided: any) => ({
    ...provided,
    ':not(:last-child)': {
      borderBottom: '1px solid',
      borderBottomColor: theme.colors.shades.grey232,
      marginBottom: theme.space[2],
    },
  }),
});

const ClearIndicator = (props: any) => {
  const theme = useTheme() as Theme;

  return (
    <components.ClearIndicator {...props}>
      <Icon
        component={MaterialClear}
        width="20px"
        height="20px"
        fill={theme.colors.shades.grey143}
      />
    </components.ClearIndicator>
  );
};

const createDropdownIndicator = (
  error: boolean,
  theme: Theme & DefaultTheme
) => (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        component={MaterialExpandMore}
        width="23px"
        height="23px"
        fill={
          error
            ? theme.colors.feedback.error
            : // eslint-disable-next-line react/destructuring-assignment
            props.isDisabled
            ? theme.colors.shades.grey204
            : // eslint-disable-next-line react/destructuring-assignment
            props.isFocused
            ? theme.colors.shades.grey42
            : theme.colors.shades.grey143
        }
      />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = (props: any) => {
  const theme = useTheme() as Theme;

  return (
    <components.MultiValueRemove {...props}>
      <Icon
        component={MaterialClear}
        width="16px"
        height="16px"
        fill={theme.colors.shades.grey143}
      />
    </components.MultiValueRemove>
  );
};

const GroupLabel = ({ label }: { label: string }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    color="text.secondary"
  >
    {label}
  </Box>
);

const CreateLabel = ({ label }: { label: string }) => (
  <Text inline>
    <Text inline bold>
      {label}
    </Text>{' '}
    hinzufügen
  </Text>
);

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
  async?: boolean;
  loadOptions?: (
    inputValue: string,
    callback: (options: OptionsType<S>) => void
  ) => void;
  loadingMessage?: (obj: { inputValue: string }) => string;
  onInputChange?: (newValue: string) => string;
}

const SelectBox = <S,>({
  error,
  noOptionsMessage,
  creatable,
  onChange,
  disabled,
  loading,
  hideReset,
  multiSelect,
  searchable,
  async,
  loadOptions,
  ...props
}: SelectBoxProps<S>): JSX.Element => {
  const theme = useTheme();
  const debouncedLoading = useDebouncedCallback(
    loadOptions || (() => null),
    400
  );

  const commonProps = {
    ...props,
    isDisabled: disabled || loading,
    isClearable: !hideReset,
    isLoading: loading,
    isMulti: multiSelect,
    formatGroupLabel: ({ label }: GroupTypeBase<S>) => (
      <GroupLabel label={label} />
    ),
    noOptionsMessage: () => noOptionsMessage || null,
    onChange: (values: S | OptionsType<S> | null) =>
      onChange?.(
        (Array.isArray(values)
          ? values
          : values === null
          ? []
          : [values]) as OptionsType<S>
      ),
    styles: getCustomStyles(!!error, theme as Theme),
    components: {
      ClearIndicator,
      DropdownIndicator: createDropdownIndicator(!!error, theme as Theme),
      MultiValueRemove,
    },
  };

  if (async) {
    return <AsyncSelect {...commonProps} loadOptions={debouncedLoading} />;
  }

  if (creatable) {
    return (
      <CreatableSelect
        {...commonProps}
        formatCreateLabel={(label) => <CreateLabel label={label} />}
      />
    );
  }

  return <Select {...commonProps} isSearchable={searchable} />;
};

SelectBox.defaultProps = {
  placeholder: 'Auswählen',
  noOptionsMessage: 'Keine Auswahl gefunden.',
  loading: false,
  searchable: false,
};

export { SelectBox };
