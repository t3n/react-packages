/* eslint-disable no-nested-ternary */
import React from 'react';
import Select, { components, OptionsType } from 'react-select';
import { WidthProps } from 'styled-system';

import { MaterialClear, MaterialExpandMore } from '@t3n/icons';
import { Theme } from '@t3n/theme';

import { DefaultTheme, useTheme } from 'styled-components';
import { Badge } from '../Badge';
import { Box } from '../Box';
import { Icon } from '../Icon';

const getCustomStyles = (error: boolean, theme: Theme & DefaultTheme) => ({
  container: (provided: any) => ({
    ...provided,
    outline: '0',
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
    cursor: 'pointer',
    backgroundColor: state.isSelected
      ? theme.colors.shades.grey143
      : state.isFocused
      ? theme.colors.shades.grey204
      : null,
    color: state.isSelected
      ? theme.colors.text.inverse
      : theme.colors.text.primary,
    ':active': {
      backgroundColor: state.isSelected
        ? theme.colors.shades.grey143
        : state.isFocused
        ? theme.colors.shades.grey204
        : null,
    },
  }),
  noOptionsMessage: (provided: any) => ({ ...provided, textAlign: 'left' }),
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

const DropdownIndicator = (error: boolean, theme: Theme & DefaultTheme) => (
  props: any
) => {
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

const formatGroupLabel = (data: any) => (
  <Box display="flex" alignItems="center" justifyContent="space-between">
    {data.label}
    <Badge small variant="secondary" rounded>
      {data.options.length}
    </Badge>
  </Box>
);

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
  noOptionsMessage?: string;
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

function SelectBox<S>({
  autoFocus,
  defaultValue,
  disabled,
  error,
  hideReset,
  id,
  inputValue,
  loading,
  multiSelect,
  name,
  noOptionsMessage,
  options,
  placeholder,
  searchable,
  tabIndex,
  value,
  width,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onToggleOpen,
}: SelectBoxProps<S>): JSX.Element {
  const theme = useTheme();

  return (
    <Box width={width}>
      <Select
        autoFocus={autoFocus}
        isDisabled={disabled}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        isClearable={!hideReset}
        id={id}
        inputValue={inputValue}
        isLoading={loading}
        isMulti={multiSelect}
        name={name}
        noOptionsMessage={() => noOptionsMessage || null}
        options={options}
        placeholder={placeholder}
        isSearchable={searchable}
        tabIndex={tabIndex}
        value={value}
        onBlur={onBlur}
        onChange={(values) =>
          onChange?.(
            (Array.isArray(values)
              ? values
              : values === null
              ? []
              : [values]) as OptionsType<S>
          )
        }
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onToggleOpen={onToggleOpen}
        width={width}
        styles={getCustomStyles(!!error, theme as Theme)}
        components={{
          ClearIndicator,
          DropdownIndicator: DropdownIndicator(!!error, theme as Theme),
          MultiValueRemove,
        }}
      />
    </Box>
  );
}

SelectBox.defaultProps = {
  placeholder: 'Wählen...',
  noOptionsMessage: 'Keine Optionen gefunden.',
  loading: false,
};

export { SelectBox };
