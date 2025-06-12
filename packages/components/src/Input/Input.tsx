/* eslint-disable no-nested-ternary */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import {
  position,
  size,
  space,
  width as styledWidth,
  WidthProps,
} from 'styled-system';

import {
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff,
} from '@t3n/icons';
import { getThemeColor, ThemeProps } from '@t3n/theme';

import Icon from '../Icon';

export type InputTypes = 'text' | 'email' | 'password' | 'number' | 'tel';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'>,
    WidthProps {
  type?: InputTypes;
  onReset?: () => void;
  isFocused?: boolean;
  value?: string;
  defaultValue?: string;
  error?: boolean;
  className?: string;
  hideReset?: boolean;
}

interface StyledNativeInputProps extends InputProps {
  isFocused: boolean;
}

const StyledInput = styled.div<InputProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${styledWidth};
`;

const border = css`
  border: 1px solid
    ${({
      isFocused,
      error,
      disabled,
      theme,
    }: StyledNativeInputProps & ThemeProps) =>
      error
        ? theme.colors.feedback.error
        : disabled
          ? theme.colors.shades.grey204
          : isFocused
            ? theme.colors.shades.grey42
            : theme.colors.shades.grey95};
`;

const StyledNativeInput = styled.input.attrs(() => ({
  noValidate: true,
}))<StyledNativeInputProps>`
  width: 100%;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 1rem;
  line-height: 40px;
  color: ${getThemeColor('text.primary')};
  background-color: ${getThemeColor('background.primary')};
  border-radius: ${(props) => props.theme.border.radii[1]};
  outline: 0;
  ${border}
  ${({ theme, hideReset }) => space({ theme, pl: 2, pr: hideReset ? 2 : 6 })};

  ::placeholder,
  :disabled {
    opacity: 0.6;
  }

  &[type='text'],
  &[type='password'],
  &[type='email'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-ms-clear {
    display: none;
  }
`;

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  padding: 0;
  margin-top: -0.75rem;
  background: transparent;
  border: none;
  outline: 0;
  ${({ theme }) => size({ theme, width: 3, height: 3 })}
  ${({ theme }) => position({ theme, top: '50%', right: 1 })}

  &:hover {
    cursor: pointer;
  }
`;

const Input = forwardRef(
  (
    {
      disabled,
      type = 'text',
      error,
      width = '100%',
      className,
      onFocus,
      onBlur,
      onChange,
      onReset,
      isFocused = false,
      value: controlledValue,
      defaultValue,
      hideReset = false,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement | null>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(defaultValue || '');
    const [focused, setFocused] = useState(isFocused || false);
    const [revealPassword, setRevealPassword] = useState(false);

    useImperativeHandle(ref, () => inputRef.current);

    const inputType = type === 'password' && revealPassword ? 'text' : type;
    const displayValue =
      controlledValue !== undefined ? controlledValue : value;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (!controlledValue) setValue(e.target.value);
      if (onChange) onChange(e);
    };

    const handleReset = () => {
      setValue('');
      if (inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus();
      }
      if (onReset) onReset();
    };

    const handleRevealPassord = () => {
      setRevealPassword(!revealPassword);
      if (inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus();
      }
    };

    useEffect(() => {
      if (focused && inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus();
        if (type !== 'email' && type !== 'number') {
          // E-Mail type and number type do not support selectionStart
          inputRef.current.selectionStart = inputRef.current.value.length;
        }
      }
    }, [focused, type]);

    return (
      <StyledInput
        disabled={disabled}
        width={width}
        className={className}
        isFocused={focused}
        hideReset={hideReset}
      >
        <StyledNativeInput
          aria-label="Input-Feld"
          error={error}
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleOnChange}
          isFocused={focused}
          disabled={disabled}
          value={displayValue}
          ref={inputRef}
          hideReset={hideReset}
          {...props}
        />
        {value.length > 0 && !disabled ? (
          type && type === 'password' ? (
            <Button tabIndex={-1} onClick={handleRevealPassord}>
              <Icon
                component={
                  revealPassword ? MaterialVisibilityOff : MaterialVisibility
                }
                fill={focused ? 'text.primary' : 'shades.grey204'}
              />
            </Button>
          ) : hideReset ? null : (
            <Button tabIndex={-1} onClick={handleReset}>
              <Icon
                component={MaterialClear}
                width="1.5rem"
                height="1.5rem"
                fill={focused ? 'text.primary' : 'shades.grey204'}
              />
            </Button>
          )
        ) : null}
      </StyledInput>
    );
  },
);

export default Input;
